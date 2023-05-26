const express  = require('express')
const banner = require('./banner.json')
const app = express()
  //http://127.0.0.1:8000/request/?id=1&a=2 query参数
app.get('/request/:id',(req,res)=>{//params参数
	res.set('Access-Control-Allow-Origin','*')
	console.log(req.query.id)
  let result = banner.find(item => req.params.id == item.id)
  let str = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
	 <h1>${result.id}</h1>
	 <img src='${result.imgUrl}'></img>
	</body>
	</html>`
	res.send(str)
})

app.listen(8000,()=>{
	console.log('listen on port http://127.0.0.1:8000')
}) 