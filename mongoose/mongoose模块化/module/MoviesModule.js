const mongoose = require('mongoose')

let MoviesSchema = new mongoose.Schema({
	name:String,
	director:String,
	timer:mongoose.Schema.Types.Mixed
})
let MoviesModel = mongoose.model('movies',MoviesSchema)
module.exports = MoviesModel