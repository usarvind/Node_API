module.exports = function(Sequelize, Schema){
	var Weather = Schema.define('weather_master', {		
		
	  json_data:{
	    type: Sequelize.TEXT
	  },
	
	}, {underscored: true});

	Weather.sync({force: false});

	return Weather;
}