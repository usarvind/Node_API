module.exports = function(dataBaseType){
	
	//Start: sequelize database connection

	
	var sequelize = new dataBaseType('api_table', 'root', '', {
	  host: 'localhost',
	  dialect: 'mysql',
	  operatorsAliases: 'false',
	  logging: false,
	  pool: {
	    max: 5,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	  }
	});

	sequelize.authenticate().then(() => {
		console.log('Connection has been established successfully.');
	}).catch(err => {
		console.error('Unable to connect to the database:', err);
	});
	return sequelize;


	//End: sequelize database connection
}