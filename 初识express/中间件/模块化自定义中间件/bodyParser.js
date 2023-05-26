const qs = require('querystring');

const bodyParser = (req,res,next)=>{
    let str = '';
    req.on('data',(chunk)=>{
     str +=chunk;
    })
    req.on('end',()=>{
        const body = qs.parse(str);
        req.body = body;
        next();
    })
} 
module.exports = bodyParser

//注意：Express内置的express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的