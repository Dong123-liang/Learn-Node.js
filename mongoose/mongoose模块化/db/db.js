module.exports = function(success,error){
if( typeof(error) !== 'function'){
 	error =  () =>{
	console.log('连接失败')
 }
}

const mongoose = require('mongoose')
const db = require('../config/config')
const{dbpath,dbport,dbname} = config
	//默认启用的端口号  数据库名称       
mongoose.connect(`mongodb://${dbpath}:${dbport}/${dbname}`)

mongoose.connection.once('open',()=>{
	success()
console.log('连接成功')


})

mongoose.connection.once('error;',()=>{
	error()
console.log('连接错误')
})

mongoose.connection.once('close',()=>{
console.log('连接关闭')
})

}
