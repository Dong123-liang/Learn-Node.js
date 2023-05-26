//导入htpp模块
const http = require('http');
//创建web服务器
const server = http.createServer((req,response)=>{
    const querystring = require('querystring');
    response.setHeader('Content-Type','text/html; charset=utf-8')//定义请求头格式
    response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("Access-Control-Allow-Headers", '*');
    const nameArr =  ['轨迹','sddd','Lily','怎么会','Jay','无敌宇宙暴龙战士']
        //数据容器
        let postDate = '';
        //数据开始发送接收
        req.on('data',buffer => postDate += buffer)
          
        // 数据接收完毕
        req.on('end',() => {
            //接受完毕后，响应
           postDate =  nameArr.includes(postDate) ? '该用户名已存在':'该用户名可使用'
               // 调用 res.end() 方法，向客户端响应一些内容
            response.end(postDate);  
        })
});
// server.on('request',(req,response)=>{})Node中.on(事件名,callback)相当于一个事件绑定
server.listen(8000,()=>{
    console.log('listening on http://127.0.0.1:8000');
})