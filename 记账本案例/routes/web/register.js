var express = require('express');
var router = express.Router();
const UserModel = require('../../module/registerModule')
var md5  = require('md5')//导入md5包对收集的用户密码进行加密
router.get('/',function(req,res){
  res.render('auth/reg')//返回注册页面
})
router.post('/',function(req,res){
  /* 这里还可以完善做出表单验证 */
  if (!req.body.username || !req.body.password) {
    res.render('redirect', { msg: '用户名或密码为空，请重新注册!!!', url: '/register' });
} else {
    //获取请求体数据
    UserModel.findOne({ username: req.body.username }).exec((err, data) => {
        // console.log(data);
        if (data) {
            console.log('User already exists:', data.username);
            // res.send('用户名已存在，请换一个试试！！！');
            res.render('redirect', { msg: '用户名已存在，请换一个试试!!!', url: '/register' });
        } else {
            UserModel.create({ ...req.body, password: md5(req.body.password) }, (err, data) => {
                if (err) {
                    res.status(500).send('注册失败，请稍后再试~~');
                    return;
                }
                res.render('redirect', { msg: '注册成功', url: '/login' });
            })
        }
    });
}

})
module.exports = router