const mongoose = require('mongoose')
                        //默认启用的端口号  数据库名称       
mongoose.connect('mongodb://127.0.0.1:27017/GuiJi')

mongoose.connection.once('open',()=>{
	//创建文档的结构对象
	//设置集合中文档的属性·以及属性值的类型
	let BooksSchema = new mongoose.Schema({
		name:String,
		author:String,
		price:Number
	})
	//创建模型对象 对文档操作的封装对象
	let BookModel = mongoose.model('books',BooksSchema)
  
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
	console.log('连接成功')
})

mongoose.connection.once('error;',()=>{
	console.log('连接错误')
})

mongoose.connection.once('close',()=>{
	console.log('连接关闭')
})

/* 
设置两秒后自动关闭
setTimeout(() => {
	mongoose.disconnect()
},2000); */