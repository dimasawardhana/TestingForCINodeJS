let request = require('request');

module.exports = function(){
	return {
		get : function(url){
			return new Promise(resolve=>{
				request(url, (req,res,body)=>{
					resolve({req,res,body});
				});
			});
		},
		post : function(url,body){
			return new Promise(resolve=>{
				request.post(url,body,(req,res,body)=>{
					resolve({req,res,body});
				});
			});
		}
	}
}