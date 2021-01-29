
module.exports = function(model){	
	var module = {};
	module.primeDate = async function(request, response){
		try{
			
			let jsonData=`{
				"coord":{
				   "lon":-0.13,
				   "lat":51.51
				},
				"weather":[
				   {
					  "id":300,
					  "main":"Drizzle",
					  "description":"light intensity drizzle",
					  "icon":"09d"
				   }
				],
				"base":"stations",
				"main":{
				   "temp":280.32,
				   "pressure":1012,
				   "humidity":81,
				   "temp_min":279.15,
				   "temp_max":281.15
				},
				"visibility":10000,
				"wind":{
				   "speed":4.1,
				   "deg":80
				},
				"clouds":{
				   "all":90
				},
				"dt":1485789600,
				"sys":{
				   "type":1,
				   "id":5091,
				   "message":0.0103,
				   "country":"GB",
				   "sunrise":1485762037,
				   "sunset":1485794875
				},
				"id":2643743,
				"name":"London",
				"cod":200
			 }`;

			let cDate = new Date();
			let cDay= dateFormat(cDate,'dd');
			let res = await helper.primeDate(cDay);
			
			//console.log("============ : "+res)
		   
			if(!res){
				return response.json({'status':false,'message':'Date is not prime so not date'});
			}

			let object={
				json_data: jsonData
			}
			let retrunObj = await model.Weather.create(object); 
			if(!retrunObj){
				return response.json({'status':false,'message':'Audit data failed to store'});
			}
			return response.json({'status':true,'message':'Done','result':JSON.parse(jsonData)});


		}catch(error){
			console.log("primeDate   : ", error)
			response.send({'status':false,'message':'Fail due to some issue , please try again later'});
		}
	};

	return module;
}