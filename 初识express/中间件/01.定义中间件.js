// const { request } = require('express');
const express =require('express');
const app = express();
const guiji1 = (request,response,next)=>{
    console.log('这是最简单的中间件函数1号');
    next();
}

const guiji2 = (request,response,next)=>{
    console.log('这是简单的中间件函数2号');
    next();
}

/* app.use((request,response,next)=>{
console.log('这是定义中间件的简易方式');
next();
}) */
app.use(guiji1,guiji2);//一次可以调用多个中间件
app.get('/',(request,response)=>{
console.log('调用了 / 这个路由');
response.send('Home page');
})

app.get('/users',(request,response)=>{
    console.log('调用了 /users 这个路由');
    response.send('users page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})