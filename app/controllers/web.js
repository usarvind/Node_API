
module.exports = function (model) {
	var module = {};
	module.api = require('./web/apiController')(model);
	return module;
}