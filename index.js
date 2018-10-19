let express = require('express'),
	app = express();
let PORT = 3000;

app.listen(PORT, ()=>{
	console.log('running on port ', PORT);
});
app.get('/',(req,res)=>{
	let obj = {response : 'ok', statusCode : res.statusCode};
	res.json(obj);
});
app.get('/user',(req,res)=>{
	let obj =  {response : 'ok',
				 data : {
				 	username:'dimas',
				 	id : 1,
				 	name : 'dimas aji wardhana',
				 	status : true
				 }}
	res.json(obj);
});