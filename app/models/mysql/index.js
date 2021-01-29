module.exports = function (Sequelize, Schema) {
	var module = {};
	module.Weather = require('./weather')(Sequelize, Schema);
	return module;
}