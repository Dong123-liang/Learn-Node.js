//导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
//获得db对象
const db = low(adapter)
 
// Set some defaults初始化
/* db.defaults({ posts: [], user: {} }).write()
//写入数据
db.get('posts').push({ id: 1, title: 'lowdb is awesome'}).write()
//获取数据
console.log(db.get('posts').value())
//删除数据
let res = db.get('posts').remove({id:1}).write()//返回删除的值
console.log(res)
//更新数据
db.get('posts').find({id:1}).assign({title:'我是轨迹在学node'}).write() */