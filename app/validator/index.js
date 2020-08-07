module.exports = function(model){
	var module = {};
	module.web = require('./web')(model);
	
	return module;
}