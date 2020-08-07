module.exports = function (Sequelize, Schema) {
	var module = {};
	module.Weather = require('./json_data')(Sequelize, Schema);
	return module;
}