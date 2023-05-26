//定义格式化时间的函数
function dateFormat(dateStr){
    const dt = new Date(dateStr);
    const year = dt.getFullYear();
    const month = padZero(dt.getMonth()+1);
    const day  = padZero(dt.getDate()+1);
    const hour = padZero(dt.getHours());
    const minute =padZero(dt.getMinutes());
    const second = padZero(dt.getSeconds());

    return `${year}-${month}-${day}-${hour}-${minute}-${second}`
}

function padZero(num){
    return num>9?num:'0'+num;

}

module.exports ={
    dateFormat
}