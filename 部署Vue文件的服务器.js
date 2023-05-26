const express = require('express')
const app = express()
const history=require('connect-history-api-fallback')//安装 npm i connect-history-api-fallback解决使用history模式打包刷新造成404问题
app.use((request,response,next)=>{
	console.log('有人请求服务器了');
	next()
})
app.use(history)//使用history npm 包时必须写在使用打包后vue文件之前
app.use(express.static(__dirname+'/static'))
app.get('/cars',(request,response)=>{
	const cars = [
		{id:'001',name:'奔驰',price:199},
		{id:'002',name:'马自达',price:109},
		{id:'003',name:'捷达',price:120},
	]
	response.send(cars)
})

app.listen(5005,(err)=>{
	if(!err) console.log('服务器2启动成功了,请求汽车信息地址为：http://localhost:5005');
})