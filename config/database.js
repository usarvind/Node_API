
const env = process.env.NODE_ENV || "localhost"
module.exports = function (dataBaseType) {

    let DB={};
    if(env=='development'){
        DB={
            db_name:'',
            db_user_id:'',
            db_password:'',
            db_connect:{
                host:'192.168.',
                port:'3666',
            }
            
        }
    }else if(env=='production'){
        DB={
            db_name:'',
            db_user_id:'',
            db_password:'',
            db_connect:{
                host:'192.168.',
                port:'3708',
            }
        }
    }else{
        DB={
            db_name:'weather_table',
            db_user_id:'root',
            db_password:'',
            db_connect:{
                host:'localhost',
            }
        }
	}
	
    let db_object={
        dialect: 'mysql',
        operatorsAliases: "false",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
    for(r in DB.db_connect){
        db_object[r]=DB.db_connect[r];
        //console.log("rrrrrrrrrrrrrrrrr :"+r)
    }
   
    var sequelize = new dataBaseType(DB.db_name, DB.db_user_id, DB.db_password, db_object);
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');

    }).catch(err => {

        console.error('Unable to connect to the database:', err);

    });

    return sequelize;

    //End: sequelize database connection
};
