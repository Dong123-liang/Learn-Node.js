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
/* limit(n)限制显示几条数据,skip(n)跳过n条数据的情况下查询(可以在分页器利用),sort(1)按照查询条件进行升序查询,sort(-1)按照查询条件进行升序查询
select()只显示符合里面查询条件的内容
*/
 PhoneModel.find().limit(5).skip(3).sort({price:-1}).select({price:1,_id:0}).then((err,data)=>{
	if(err) console.log(err)
	console.log(data)
	mongoose.disconnect()
})
})