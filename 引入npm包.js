const guiji =require('./npmpackage')
// console.log(guiji)
const time = guiji.dateFormat(new Date());
console.log(time);
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
const str = guiji.htmlEscape(htmlStr);
console.log(str);
const unstr = guiji.UnhtmlEscape(htmlStr);
console.log(unstr);
