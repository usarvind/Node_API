var sha224 = require('js-sha256').sha224;
var CryptoJS = require("crypto-js");
var AES = CryptoJS.AES;






module.exports.primeDate = function(day, cb){
    let d= parseInt(day);
    for(let i =2 ;i< d ;i++){
        if (d % i == 0){ 
          return cb(false);
        }else{
           return cb(true);
        }  
    }
}



////////////////////////////////////////////////////////////////////////

module.exports.gameNumber = function (length) {
    var chars = '0123456789';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
module.exports.randomString = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
module.exports.roundNumber = function () {
    return Math.random();
};
module.exports.gameHash = function (roundNumber, hashSalt) {
    return sha224(roundNumber + hashSalt);
};
module.exports.randomOnlyNumber = function (length) {
    var chars = '0123456789';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
module.exports.randomNumber = function (length) {
    var chars = '0123456789';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

    return result;
};
module.exports.getNumber = function (length) {
    var chars = '3456';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

    return result;
};
module.exports.getRandomFloat = function (min, max) {
    var float_val = Math.random() * (max - min) + min;
    return float_val.toFixed(2);
};
module.exports.getRandomInt = function (min, max) {
    var reandomNo = Math.floor(Math.random() * (max - min + 1) + min);
    return reandomNo;
};
module.exports.getRandomNumArray = function (items) {
    return items[Math.floor(Math.random() * items.length)];
};
module.exports.randomFloat = function () {
    return Math.random();
};
module.exports.encryptHash = function (data, key) {
    let ciphertext = AES.encrypt(JSON.stringify(data), key);
    return ciphertext.toString();
};
module.exports.decryptHash = function (ciphertext, key) {
    let bytes = AES.decrypt(ciphertext, key);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};
module.exports.createSecretkey = function (serverSeed, clintSeed, nouse) {
    let secretKey = CryptoJS.SHA512((nouse + serverSeed + clintSeed));
    return secretKey;
};

module.exports.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



