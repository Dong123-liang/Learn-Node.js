var express = require('express')
const UserModel = require('../../module/registerModule')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
var router = express.Router()
router.post('/login',function(req,res){
   req.body.password = md5(req.body.password)
	UserModel.findOne(req.body).exec((err,data)=>{
		if(err){
			res.json({
				code:2001,
				message:'登录错误',
				data:null
			})
		  return
		}else if(!data){
			res.json({
				code:2002,
				message:'账号或密码出现错误',
				data:null
			})
			return
		}
//登录匹配成功后,创建当前用户的token
		let token  = jwt.sign({
			username:data.username,//存储用户名及其id进行加密
			_id:data._id
			},'helloguiji',{
			expiresIn:60 * 60 * 24* 7//配置过期时间,单位是S
		})
     res.json({
			code:0000,
			message:"登录成功",
			data:token
		 })
	})
})

module.exports = router