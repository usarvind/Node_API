module.exports = function(model) {
    var module = {};

    module.checkValid = async function(request, response, next){
      let token = request.headers.token;
      let private_key = request.headers.private_key;
      //console.log("+++++++++++++ : ",request.headers)
      if(!token){
        return response.json({'status':false,'message':'Please send the token in api headers'});
      }
      if(!private_key){
        return response.json({'status':false,'message':'Please send match token in api headers'});
      }
      let res = await helper.matchToken(token,private_key);
      if(!res){
        return response.json({'status':false,'message':'Api token not match'});
      }
      //console.log(" token token : "+res);
      next();
    };

    

    return module;
}    