module.exports = function(model){
	var module = {};



	//Start: Validation for login
	module.login = function(req, res, next){
		
		// req.checkBody('email', 'Email Address is required').notEmpty();
		// req.checkBody('password', 'Password is required').notEmpty();
		
		// var errors = req.validationErrors();
	   
	   	// if(errors){
	   	// 	req.flash('vErrors',errors);
	    //   	res.redirect('/register');
	   	// }else{	   		
		// 	next();
	   	// };
	    next();
	};
	//End: Validation for login

	return module;	
}