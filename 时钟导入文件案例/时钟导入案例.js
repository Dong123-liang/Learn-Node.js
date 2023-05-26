const fs = require('fs');
const path = require('path');

const regScript = /<script>[\s\S]*<\/script>/
const regStyle = /<style>[\s\S]*<\/style>/

fs.readFile(path.join(__dirname,'/时钟倒计时/京东倒计时效果.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败' + err.message);
    }
//     console.log('文件读取成功' + dataStr);
resolveCSS(dataStr);
resolveJS(dataStr);
resolveHTML(dataStr)
 }
)
function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr);
    const newCSS = r1[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'/clock/index.css'),newCSS,function(err){
        if(err){
             return console.log('CSS样式写入失败' + err.message);
        }
        console.log('CSS写入成功');
    })
}

function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr);
    const newJS = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'/clock/index.js'),newJS,function(err){
        if(err){
            console.log( 'JS文件写入失败'+err.message)
        }
        console.log('JS文件写入成功');
    })
}

function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'/clock/index.html'),newHTML,function(err){
        if(err){
            return  console.log('HTML文件写入失败'+ err.message);
        }
        console.log('文件导入成功');
    })
}