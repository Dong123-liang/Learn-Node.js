const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// app.use('/files', express.static('./files'))//第一个参数此时表示必须为/files目录下的文件,访问时需要写在/files目录下
app.use(express.static('../时钟导入文件案例/clock'))//将../时钟导入文件案例/clock目录下的所有资源变为静态资源对外提供，此时只用输入clock目录下所要打开的文件名，不用输入/clock


app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')

})
//http://127.0.0.1/files/index.html
//http://127.0.0.1/index.html