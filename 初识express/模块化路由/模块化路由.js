const express = require('express');
const app = express();
//注册路由
const router = require('./router');
//访问路由
app.use('/api',router);//第一个参数为访问前缀可以省略

app.listen(8000,()=>{
    console.log('http://127.0.0.1:8000');
})