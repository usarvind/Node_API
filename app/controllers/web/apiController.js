
module.exports = function(model){	
	var module = {};
	module.primeDate = async function(request, response){
		try{
			let jsonData=JSON.parse(`{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}`);
			let currentDay= dateFormat(now,'dd');
            helper.primeDate(currentDay, function(flag){
				if(flag){
					return response.json({'status':'success','message':'Done','result':jsonData});
				}
				return response.json({'status':'fail','message':'Date is not prime , so not data'});
			});
		}catch(error){
			console.log("primeDate   : ", error)
			res.send({'status':'fail','message':'Fail due to some issue , please try again later'});
		}
	};

	return module;
}