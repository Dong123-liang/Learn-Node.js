// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入解析表单数据的中间件 body-parser
const bodyParser = require('body-parser')
const body = bodyParser.json()
// 2. 使用 app.use() 注册中间件
// app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', body,(req, res) => {
  res.set('Access-Control-Allow-Origin',"*")
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8000, function () {
  console.log('Express server running at http://127.0.0.1:8000')
})
