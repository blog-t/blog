const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

const config = require('./config');
// 路由处理器
const index = require('./routes');
const login = require('./routes/login');
const register = require('./routes/register');
const home = require('./routes/home');

// 连接数据库
const db = mongoose.connect('mongodb://localhost/Blog').then(()=>{console.log('连接数据库成功')},(err)=>{console.log('连接数据库失败')});
// 监听monngodb数据连接是否成功


// 使用body-parser解析
app.use(bodyParser.urlencoded({extend:false}));
app.use((bodyParser.json()));
app.use(cookieParser());
app.use(session({
    name:config.sessionID,
    secret:config.sessionSecret,
    store:new MongoStore({
        mongooseConnection:mongoose.connection
    }),
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:24*60*60*1000,  // cookie有效期是毫秒
        secure:false
    }
}));

// 路由中间间
app.use('/',index);
app.use('/login',login);
app.use('/register',register);
app.use('/home',home);

app.listen(3001,function () {
    console.log('app has been started at 3001');
})