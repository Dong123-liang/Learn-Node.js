const jwt = require('jsonwebtoken')
module.exports = function(req,res,next){
  //获取信息前进行token校验
  const token = req.get('token')
  if(!token){
  return  res.json({
      code:"2003",
      msg:'缺失token',
      data:null
    })
  }
  //校验token
 jwt.verify(token,'helloguiji',(err,data)=>{
  /* 校验失败 */
	 if(err){
	  return  res.json({
      code:'2004',
      msg:"token校验信息失败",
      data:null
    })
  }
  //保存对应当前用户信息
  req.user = data
  next()
 })
}