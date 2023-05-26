	//创建文档的结构对象
	//设置集合中文档的属性·以及属性值的类型
	// const mongoose = require('mongoose')
	const BookModel = require('./module/BooksModule')
	const db = require('./db/db.js')
	db(()=>{
		BookModel.create({
			name:"西游记",
			author:'吴承恩',
			price:30
	}).then((err,data)=>{
		if(err){
			console.log(err)
			return
		}
		console.log(data)
	})
	},()=>{})