module.exports = function (model) {
	var module = {};
	module.web = require('./web.js')(model);

	return module;
}	