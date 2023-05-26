const express = require('express');
const router = express.Router();

router.get('/get',(req,res)=>{
    res.send('这是router.get()方法');
})
router.post('/post',(req,res)=>{
    res.send('这是router.post()方法');
})
module.exports = router;
