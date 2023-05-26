const escape = require('./guiji-HtmlEscape/HtmlEscape')
const date = require('./guiji-FromDate/FromDate')

module.exports = {
    ...date,//利用...展开运算符将包中得函数数据等暴露出去(也可以使用解构赋值)
    ...escape
}

console.log(escape);