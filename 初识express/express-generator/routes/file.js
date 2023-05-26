const express = require('express')
const formidable = require('formidable');
const router = express.Router()
router.get('/',(req,res)=>{
	res.render('file') //将模板进行渲染

})
//处理文件上传
router.post('/',(req,res)=>{
  //创建form对象
	const form = formidable({ multiples: true ,
		//选择文件保存路径
		uploadDir:__dirname + '/../public/images',
		//保持文件后缀
		keepExtensions:true
	});
  //解析请求报文
	form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
		let url = `/images/${files.file.newFilename}` // 将来学了数据库将次路径保存到数据库中
		console.log(fields) //text radio checkbox select
		console.log(files) //file
    res.send(url);
  });
})
module.exports = router;