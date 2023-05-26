//1.引入mongoose
const mongoose = require('mongoose');

//2.链接mongodb数据库 connect 连接
mongoose.connect('mongodb://127.0.0.1:27017/GuiJi');

//3.设置连接的回调
mongoose.connection.on('open',()=>{
	//4.声明文档结构
	const PhoneSchema = new mongoose.Schema({
		brand:String,
		color:String,
		price:Number,
 		tags:Array,
		ishot:Boolean,
	})
 	//6.创建模型对象
 	const PhoneModel = mongoose.model('phone',PhoneSchema);
	//单个删除
/*  	PhoneModel.deleteOne({_id:"6469ded0ec3f4596c922016f"}).then((err,data)=>{
		if(err) console.log(err);
      console.log(data);
      mongoose.connection.close();
	}) */
	//批量删除
	PhoneModel.deleteMany({ishot:false}).then((err,data)=>{
		if(err) console.log(err);
      console.log(data);
      mongoose.connection.close();
	}) 
})