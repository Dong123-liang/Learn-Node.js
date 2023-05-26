// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()

server.on('request',(request,response)=>{
    if(request.method !== 'GET'){   //进行错误处理
        response.statusCode = 405
        response.end('405 Method is Not Allowed ')
    }

    const url = request.url;
    // console.log(url)
    let fpath = '';
    if(url==='/'){
        fpath = path.join(__dirname,'/clock/index.html');//默认展示的页面
    }else{
        fpath  = path.join(__dirname,'/clock',url)
    }

  
fs.readFile(fpath,'utf8',(err,dataStr)=>{
    if(err){
        console.log(err)
        switch(err.code){
          case 'ENOENT':
            response.statusCode=404
            response.end('404 Not Found')
            break
          case 'EPERM':
            response.statusCode = 403
            response.end('<h1>403 Forbidden</h1>')
            break  
         default:
            response.statusCode =500
            response.end('<h1>500 Internal server Error')
        }
        return
    }
    response.end(dataStr);//读取成功响应内容
})
})

server.listen(8000,()=>{
    console.log('listening on http://127.0.0.1:8000');
})




