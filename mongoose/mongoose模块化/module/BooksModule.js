const mongoose = require('mongoose')

let BooksSchema = new mongoose.Schema({
	name:String,
	author:String,
	price:Number
})
//创建模型对象 对文档操作的封装对象
let BookModel = mongoose.model('books',BooksSchema)
module.exports = BookModel
