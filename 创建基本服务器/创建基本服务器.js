//导入htpp模块
const http = require('http');
//创建web服务器
const server = http.createServer();
server.on('request',(request,response)=>{
    response.setHeader('Content-Type','text/html; charset=utf-8')//定义请求头格式
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
/*     const url = request.url;//端口号默认为8000所以不显示
    const method = request.method;
    let str = `请求的url${url},请求的方法是${method}`; */
    let data = []
    req.on('data', chunk => {
        data.push(chunk)  // 将接收到的数据暂时保存起来
    })
    req.on('end', () => {
        console.log(JSON.parse(data)) // 数据传输完，打印数据的内容
    })
    const UserName={
    code:"200",
    name:  ['轨迹','sddd','Lily','怎么会','Jay','无敌宇宙暴龙战士'],
    message:"获取信息成功"
    }
     // 调用 res.end() 方法，向客户端响应一些内容
    // response.end(JSON.stringify(UserName));
})
server.listen(8000,()=>{
    console.log('listening on http://127.0.0.1:8000');
})