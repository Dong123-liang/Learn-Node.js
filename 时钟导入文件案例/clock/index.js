
window.addEventListener("load",function(){
   var hour=document.querySelector("#hour");
   var min = document.querySelector("#min");
   var second = document.querySelector("#second");
   var settime = +new Date("2088-10-1 24:00:00");
   //console.log('settime',settime) 3747484800000
   count();
   setInterval(count,1000);
   function count(){
    var  date = +new Date();
    var  numdate = (settime - date)/1000;//毫秒化作秒
    var h = parseInt(numdate / 60 / 60 % 24);
    h = h<10?'0'+h:h;
    hour.innerHTML = h;
    var m = parseInt(numdate / 60 % 60);
    m = m<10?'0'+m:m;
    min.innerHTML = m;
    var s = parseInt(numdate % 60);
    s = s<10?'0'+s:s;
    second.innerHTML = s;
   }
})
