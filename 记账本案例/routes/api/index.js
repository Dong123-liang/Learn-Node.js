var express = require('express');
var router = express.Router();

//导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
//导入shortid
const shortid = require('shortid');
//使用lowdb
const adapter = new FileSync(__dirname +'/../data/db.json')
//获得db对象
// const db = low(adapter)
//连接数据库模型结构对象
const AccountModle = require('../../module/accountModule')
const jwt = require('jsonwebtoken')
//导入做token校验的中间件
const checkToken = require('../../middlewares/checkToken')
/* 当前文件接口可以直接在postman中测试 */

/* GET 跳转页面后加载页面. */
router.get('/account', checkToken,function(req, res, next) {
  //获取信息前进行token校验 判断校验token 校验失败的情况 
 //获取账单信息
  AccountModle.find({username: req.session.username}).sort({time:-1}).exec((err,data)=>{  //下载新版本使用exec会出现问题
    if(err){
      // res.status(500).send('读取失败')
      res.json({
        code:'1001',
        msg:'读取失败',
        data:null
      })
      return
    }
   // res.render('list',{account:data});
   res.json({
    code:'0000',
    msg:'读取成功',
    data:data
  })
  })
 })
//获取单个账单信息
router.get('/account/:id',checkToken,function(req,res){
  AccountModle.find({_id:req.params.id}).exec((err,data)=>{  //下载新版本使用exec会出现问题
    if(err){
      // res.status(500).send('读取失败')
      res.json({
        code:'1004',
        msg:'读取失败',
        data:null
      })
      return
    }
   res.json({
    code:'0000',
    msg:'读取成功',
    data:data
  })
  })
})
//更新单个账单信息
router.patch('/account/:id',checkToken,function(req,res){
  AccountModle.updateOne({_id:req.params.id},req.body,((err,data)=>{  //下载新版本使用exec会出现问题
    if(err){
      // res.status(500).send('读取失败')
      res.json({
        code:'1005',
        msg:'更新失败',
        data:null
      })
      return
    }
    /*    res.json({
    code:'0000',
    msg:'更新成功',
    data:data//此处如果依旧直接返回的是更新的记录，并不是数据，不合理，所以得改造
  }) */
    AccountModle.findById({_id:req.params.id},(err,data)=>{
      if(err){
        // res.status(500).send('读取失败')
        res.json({
          code:'1004',
          msg:'更新失败',
          data:null
        })
        return
      }
     res.json({
      code:'0000',
      msg:'更新成功',
      data:data
    })
    })
  }))
})
//新增数据接口
router.post('/account', checkToken,function(req, res, next) {
  AccountModle.create({
    ...req.body,
  },(err,data)=>{//下载新版本使用exec会出现问题
   if(err){
     res.json({
      code:'1002',
      message:"添加失败"
     })
    return
   }
   res.json({
    code:'0000',
    message:"添加成功",
    data:data
   })
  })
})

//删除
router.get('/account/:id',checkToken,function(req,res,next){
   let params = req.params.id
    AccountModle.deleteOne({_id:params},(err,data)=>{
      if(err){
        res.json({
        code:'1003',
        data:'删除失败',
        data:{}
        })
      }
      res.json({
        code:'0000',
        message:"删除成功",
        data:data
       })
    })
})
module.exports = router;
