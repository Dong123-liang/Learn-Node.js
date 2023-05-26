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

	//单个读取
/*   PhoneModel.findOne({brand:"苹果13"}).then((err,data)=>{
	 if(err) console.log(err)
 }) */

//根据id进行读取
/* PhoneModel.findById({id:'6469df3e6a335356a1cdf4e0'}).then((err,data)=>{
	if(err) console.log(err)
	mongoose.disconnect()
}) */
 
//加条件查询
/* PhoneModel.find({brand:'小米'}).then((err,data)=>{
	if(err) console.log(err)
	console.log(data)
	mongoose.disconnect()
}) */


//读取所有
 PhoneModel.find().then((err,data)=>{
	if(err) console.log(err)
	console.log(data)
	mongoose.disconnect()
})
})