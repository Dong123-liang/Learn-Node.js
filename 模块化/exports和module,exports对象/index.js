console.log(exports)//{}
console.log(module.exports)//{}
console.log(exports === module.exports)//true


const username = 'zs'

exports = 20
module.exports.username = username
exports.sayHello = function() {
  console.log('大家好！')
}

//   !!!
// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
