const express = require('express');
const app = express();

app.get('/getCities', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const province = req.query.province;
    console.log(req.url,req.query)
    // 根据省份获取城市列表，返回JSON格式的城市列表
    if (province === "北京") {
      res.json(["朝阳区",'海淀区','东城区','西城区']);
    } else if (province === "上海") {
      res.json(["黄埔区",'普陀区','虹口区']);
    } else if (province === "西安") {
      res.json(["长安区", "雁塔区", "高新区"]);
    } else {
      res.json([]);
    }
  });
app.get('/getData', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const county = req.query.county;
    console.log(county)
    // 根据区县名称查询数据，返回JSON格式的数据列表
    if (county === "清河区") {
      res.json([
        {name: "清河区房屋", address: "清河区", house: "2室2厅",floor:'2',area:'80',preice:"60"},
      ]);
    } else if (county === "青浦区") {
      res.json([
        {name: "青浦区房屋", address: "清浦区", house: "3室2厅",floor:'3',area:'120',preice:"100"},
      ]);
    } else if (county === "淮阴区") {
      res.json([
        {name: "淮阴区房屋", address: "淮阴区", house: "3室2厅",floor:'6',area:'80',preice:"80"},
      ]);
    }else if (county === "开发区") {
      res.json([
        {name: "开发区房屋", address: "开发区", house: "4室2厅",floor:'8',area:'150',preice:"200"},
      ]);
    } 
    else {
      res.json([]);
    }
  }); 
app.listen(3000, function() {
    console.log('应用程序已启动，监听端口 http://127.0.0.1:3000');
  });