module.exports = function(Sequelize, Schema){
	var User = Schema.define('user_master', {		
		
	  name:{
	    type: Sequelize.STRING
	  },
	  surname:{
	    type: Sequelize.STRING
	  },
	  address:{
	    type: Sequelize.STRING
	  },
	  postal_number:{
	    type: Sequelize.STRING
	  },
	  city:{
	    type: Sequelize.STRING
	  },
	  country:{
	    type: Sequelize.STRING
	  },
	  tel_number:{
	    type: Sequelize.STRING
	  },
	  tel_code:{
	    type: Sequelize.STRING
	  },
	  email_id:{
	    type: Sequelize.STRING
	  },
	  gender:{
	    type: Sequelize.STRING
	  },
	  how_to_find_website:{
	    type: Sequelize.STRING
	  },
	  ssn:{
	    type: Sequelize.STRING
	  },
	  facebook_id:{
	    type: Sequelize.STRING
	  },
	  nameidentifier:{
		type: Sequelize.STRING
	  },
	  password:{
	    type: Sequelize.STRING
	  },
	  main_balance:{
	    type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00
	  },
	  total_deposite:{
	    type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00
	  },
	  total_withdraw:{
	    type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00
	  },
	  total_game_deposite:{
	    type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00
	  },
	  total_win_amount:{
	    type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00
	  },
	  btc_currency_address:{
	    type: Sequelize.STRING
	  },
	  profile_image:{
	    type: Sequelize.STRING, defaultValue: 'default.png'
	  },
	is_avatar:{
	  type: Sequelize.ENUM('1', '0'), defaultValue:'0'
	},
	  password_token:{
	    type: Sequelize.STRING
	  },
	  is_login:{
	    type: Sequelize.ENUM('1', '0')
	  },
	  is_moderator:{
	    type: Sequelize.ENUM('1', '0'), defaultValue:'0'
	  },
	  user_can_chat:{
	    type: Sequelize.ENUM('1', '0'), defaultValue:'1'
	  },
	  type:{
	    type: Sequelize.ENUM('admin', 'user'), defaultValue:'user'
	  },
	  status:{
	    type: Sequelize.ENUM('1', '0'), defaultValue:'1'
	  },
	  is_deleted:{
	    type: Sequelize.ENUM('1', '0'), defaultValue:'0'
		},
		anymos:{
	    type: Sequelize.ENUM('1', '0'), defaultValue:'0'
	  },
	  jwt_login_token : {
	    	type: Sequelize.STRING 		
	  }
	}, {underscored: true});

	User.sync({force: false});

	return User;
}