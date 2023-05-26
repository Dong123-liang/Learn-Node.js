var express = require('express');
var router = express.Router();
//连接数据库模型结构对象
const AccountModle = require('../../module/accountModule')
//导入判断登录状态的中间件
const checkLogin = require('../../middlewares/checkLogin')

/* const FileSync = require('lowdb/adapters/FileSync');
//导入lowdb
const low = require('lowdb')

//导入shortid
const shortid = require('shortid');
//使用lowdb
const adapter = new FileSync(__dirname +'/../data/db.json') */
//获得db对象
// const db = low(adapter)


router.get('/',function(req,res){
   res.redirect('/account')
})
/* GET 跳转页面后加载页面. */
router.get('/account', checkLogin,function(req, res, next) {
/*   //使用lowdb获取账单信息
  let account = db.get('account').value()
  console.log(account) */
  console.log(req.session.username)
  AccountModle.find({username:req.session.username}).sort({time:-1}).exec((err,data)=>{  //下载新版本使用exec会出现问题
    if(err){
      res.status(500).send('读取失败')
      return
    }
    res.render('list',{account:data});
  })

});
router.get('/account/add', checkLogin,function(req, res, next) {
  res.render('addCount');
});
//删除
router.get('/account/:id',checkLogin,function(req,res,next){
   let params = req.params.id
   /* db.get('account').remove({id:parmas}).write() //根据id删除lowdb库中的数据 */
    AccountModle.deleteOne({_id:params},(err,data)=>{
      if(err){
        res.status(500).send('删除失败')
        return
      }
      res.render('redirect',{msg :'删除成功',url:'/account'});
    })
})

router.post('/account', checkLogin,function(req, res, next) {
 req.body.time = new Date(req.body.time)
 AccountModle.create({
  username: req.session.username,//创建文档的时候记录当前用户身份,方便后期权限管理
  ...req.body
 },(err,data)=>{
  if(err){
    res.status(500).send('添加失败'+ err)
   return
  }
  res.render('redirect',{msg :'添加成功',url:'/account'});
 })

/*  //生成id
 const id = shortid.generate()
 db.get('account').unshift({id:id,...req.body}).write()//将post请求的数据写入lowdb数据库中 */
});
module.exports = router;
