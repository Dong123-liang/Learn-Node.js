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
	//批量插入
 	PhoneModel.insertMany([
 		{
 			brand:'华为',
 			color:'灰色',
 			price:2399,
			ishot:true,
 			tags:['电量大','屏幕大','信号好']
 		},
 		{
 			brand:'小米13',
 			color:'白色',
 			price:4599,
			ishot:true,
 			tags:['电量大','屏幕大','信号好']
    },
		{
			brand:'vivo',
			color:'白色',
			price:2299,
			ishot:false,
			tags:['电量大','屏幕大','信号好']
	 },
	 {
		brand:'苹果14pro',
		color:'白色',
		price:10099,
		ishot:true,
		tags:['电量大','屏幕大','信号好']
 },
 {
	brand:'oppo find X6',
	color:'白色',
	ishot:true,
	price:6099,
	tags:['电量大','屏幕大','信号好']
},
	]).then((err,data)=>{
		if(err) console.log(err);
      console.log(data);
      mongoose.connection.close();
	})
})