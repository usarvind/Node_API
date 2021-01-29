var sha224 = require('js-sha256').sha224;

//////////////////////////////////////////////////////////////////////////

module.exports.primeDate = async function(day){
    let d = parseInt(day);
    for(let i =2 ;i< d ;i++){
        if (d % i == 0){ 
         return false;
        }
    }
   return true;
}

module.exports.matchToken  = function(token,match_key){	
    let created_token =  sha224(config.gammingapis1wdfr5tgh7yu3jkm67uyhj+match_key);
    if(token !=created_token){
        return false;
    }
    return true;
};

////////////////////////////////////////////////////////////////////////



