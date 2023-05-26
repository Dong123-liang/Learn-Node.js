var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//1. 安装包 npm i express-session connect-mongo
//2. 引入 express-session connect-mongo将数据存储在中间件中
const session = require("express-session");
const MongoStore = require('connect-mongo');
const config = require('./config/config')

var indexRouter = require('./routes/web/index');
var accountRouter = require('./routes/api/index')
var registerRouter = require('./routes/web/register')
var loginRouter = require('./routes/web/login')
var loginApiRouter = require('./routes/api/login')
var app = express();
const{dbpath,dbport,dbname} = config
// 设置 session 的中间件,会在数据库创建session集合,此处一定要写在路由中间件之前，否则获取不到session
app.use(session({
	name: 'sid', //设置cookie的name，默认值是：connect.sid
	secret: 'GuiJi1512', //参与加密的字符串（又称签名）  加盐
	saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
	resave: true, //是否在每次请求时重新保存session
	store: MongoStore.create({
		mongoUrl: `mongodb://${dbpath}:${dbport}/${dbname}`//数据库的连接配置
	}),
	cookie: {
		httpOnly: true, // 开启后前端无法通过 JS 操作
		maxAge: 1000 * 60 * 60 *24// 这一条 是控制 sessionID 的过期时间的！！！
	},
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api',accountRouter)
app.use('/register',registerRouter)
app.use('/',loginRouter)
app.use('/api',loginApiRouter)
// catch 404 and forward to error handler配置404响应
app.use(function(req, res, next) {
	res.render('404')
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
