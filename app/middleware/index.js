module.exports = function (model) {
	var module = {};

	module.auth = require('./auth')(model);

	return module;
}