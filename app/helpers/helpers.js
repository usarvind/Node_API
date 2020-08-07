var sha224 = require('js-sha256').sha224;
var CryptoJS = require("crypto-js");
var AES = CryptoJS.AES;




//////////////////////////////////////////////////////////////////////////

module.exports.primeDate = function(day, cb){
    let d = parseInt(day);
    for(let i =2 ;i< d ;i++){
        if (d % i == 0){ 
         return cb(false);
        }
    }
   return cb(true);
}


////////////////////////////////////////////////////////////////////////



