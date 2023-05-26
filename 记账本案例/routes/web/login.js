var express = require('express')
const UserModel = require('../../module/registerModule')
const md5 = require('md5')
var router = express.Router()
router.get('/login',function(req,res){
 res.render('auth/login')
})
router.post('/login',function(req,res){
   req.body.password = md5(req.body.password)
	UserModel.findOne(req.body).exec((err,data)=>{
		if(err){
			res.status(500).send('登录失败，请稍后再试')
		  return
		}else if(!data){
			res.send('账号或密码出现错误')
			return
		}
		console.log(data)
		/* 用户账号密码校验后代表登录成功,设置session信息，方便下次检测验证 */
		req.session.username = data.username//引用session全局中间件
		req.session._id = data._id////这里解释为什么是req.session而不是res.session，其实是当写这一步时将登录的数据写入数据库的session中
		
		res.render('redirect',{msg:"登录成功",url:"/account"})
	})
})

router.post('/logout',function(req,res){//把请求换做为post请求，可有效防止CRFS攻击
	req.session.destroy(()=>{//退出登录·的·同时将session销毁，下次就需要重新登录
		res.render('redirect',{msg:"退出登录",url:"/login"})
	})
})
module.exports = router