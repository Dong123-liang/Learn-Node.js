const fs = require('fs');
const path = require('path');//使用path路径拼接来获取当前路径

const pathStr = path.resolve(__dirname,'./files/file1.txt')
const getPath = path.basename(pathStr);//使用path中的basename方法获取路径中的文件名
console.log(pathStr,getPath)//输出file1.txt
let getPathWithoutTxt = path.basename(pathStr,'.txt');//第二个参数可以删去文件的扩展名只获得文件的名称
console.log(getPathWithoutTxt);//输出file1
console.log(path.extname(pathStr))//输出.txt  获取文件的扩展名后缀名


fs.readFile(pathStr,'utf-8',function(err,dataString){//如果没有标明utf-8格式·,在打印dataString的时候应该用toString()方法转为字符串，否则会出现乱码
    
    if(err){
        return console.log('文件读取失败' + err.message);
    }

    console.log('文件读取成功' +'\t' +dataString);

    const arrOld = dataString.split(' ')//dataString.tostring().split('');
const array = [];
arrOld.forEach(item=>{
    array.push(item.replace('=',':'));
})
const newStr = array.join('\r\n');
console.log(newStr);
fs.writeFile('./files/writeFiles.txt',newStr,function(err){
    if(err){
        console.log('文件写入失败'+ err.message);
    } 
    console.log('读取成功');
})
})
