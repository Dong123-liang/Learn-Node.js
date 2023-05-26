const express = require('express');
const app = express();
const bodyParser = require('./bodyParser')
app.use(bodyParser);
app.use(express.json());
app.post('/user',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
})

app.listen(80,function(){
    console.log('server listening at http://127.0.0.1' );
})
