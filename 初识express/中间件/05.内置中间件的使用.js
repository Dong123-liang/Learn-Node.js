const express = require('express');

const app = express();
// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json());
//通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({extended:false}));
//处理 querystring 格式的请求体

app.post('/use',(req,res)=>{
      // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据一般用于post请求
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  res.setHeader('Access-Control-Allow-Origin','*')
/*    let str =''
  req.on('data',chunk =>{str += chunk})
  req.on('end', () => console.log(str)) */
    console.log(req.body);
    res.send('ok');//{ name: 'guiji', age: 21 }  使用postman模拟客户端向服务器发送json格式数据，服务器使用express.json()自动转化格式拿到数据
})
app.post('/book',(req,res)=>{
    // 在服务器端，可以通过 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    console.log(req.body);// { bookname: '西游记', author: '吴承恩' }
    res.send('ok');
})

app.listen(8000,function(){
    console.log('express server listening on port 80 at http://127.0.0.1:8000');
})