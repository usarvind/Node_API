module.exports = function (app, model, controllers) {
	
	require('./web_api.js')(app, model, controllers.web);
	
}	