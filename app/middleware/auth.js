module.exports = function(model) {
    var module = {};

    module.login = function(req, res, next){
        if (req.session.user) {
               var userLoginData = req.session.user;
               var checkUserDeleteOrNot = userLoginData.dataValues.is_deleted;
               if(checkUserDeleteOrNot == '1'){
                        delete req.session.user;
                        req.flash('error',"You are deleted ");
                        res.redirect('/');
               }  else {
                    next();
               }
        } else {
            req.flash('error',"Please login");
            res.redirect('/');
        }
    };

    module.isLogin = function(req, res, next){
        if (req.session.user) {
               var userLoginData = req.session.user;
               var checkUserDeleteOrNot = userLoginData.dataValues.is_deleted;
               if(checkUserDeleteOrNot == '1'){
                        delete req.session.user;
                        req.flash('error',"erro");
                        res.redirect('/');
              } else {
                    req.flash('error',"You have already login.");
                    res.redirect('/');
            }            
        } else {
        	next();
        }
    };  

    return module;
}    