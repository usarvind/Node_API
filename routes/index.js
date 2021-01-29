module.exports = function (app, model, controllers) {
	
	require('./api.js')(app, model, controllers.web);
	
}	