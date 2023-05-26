const BookModel = require('./module/MoviesModule')
const db = require('./db/db.js')
const mongoose = require('mongoose')
db(()=>{
	BookModel.create({
		name:"头文字D",
		director:'刘伟强',
		timer:2005
}).then((err,data)=>{
	if(err){
		console.log(err)
		return
	}
	console.log(data)
})
},()=>{})