const express = require('express')
const path = require('path')
const app = express()
app.use((req,res,next)=>{
 let Host = req.get('Host')
 //console.log(Host)

 let url = new URL("http://"+Host)
 //console.log(url.hostname)127.0.0.1
  if(url.hostname != '127.0.0.1'){
		res.statusCode = 404
		res.send("404 Not Found")
	}
 next()
})
app.use(express.static(__dirname+'/static'))
app.get('/use',(req,res)=>{

}) 
app.listen(8080,()=>[
	console.log('listening on port http://127.0.0.1:8080')
])