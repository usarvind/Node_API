module.exports = function(model){
	var module = {};

	//Start: Validation for register
	module.register = function(req, res, next){
		console.log((" validate res : v",req.body));
		
		req.checkBody('name', 'Name is required').notEmpty();
		req.checkBody('surname', 'Surname is required').notEmpty();
		req.checkBody('email', 'Email Address is required').notEmpty();
		req.checkBody('country', 'Country  is required').notEmpty();
		req.checkBody('city', 'City is required').notEmpty();
		req.checkBody('password', 'Password is required').notEmpty();
		req.checkBody('confirm_password', 'Confirm Password is required').notEmpty();
		req.checkBody('over_age', 'You are no 18 year old ?').notEmpty();
		req.checkBody('email', 'Please enter valid email-id').isEmail();

		var errors = req.validationErrors();
	   
	   	if(errors){
	   		req.flash('vErrors',errors);
	      	res.redirect('/register');
	   	}else{	   		
			//console.log("req.body.confirm_password: ", req.body.confirm_password);
		    if(req.body.password != req.body.confirm_password){
		    	req.flash('error',"Password confirmation is incorrect.");
				res.redirect('/register');
		    }else{
	      		next();
		    }
	   	};
	   
	};
	//End: Validation for register

	//Start: Validation for login
	module.login = function(req, res, next){
		

		req.checkBody('email', 'Email Address is required').notEmpty();
		req.checkBody('password', 'Password is required').notEmpty();
		
		var errors = req.validationErrors();
	   
	   	if(errors){
	   		req.flash('vErrors',errors);
	      	res.redirect('/register');
	   	}else{	   		
			next();
	   	};
	      	
	   	
	};
	//End: Validation for login

	return module;	
}