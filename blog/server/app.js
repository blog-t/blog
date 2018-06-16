const express = require('express');
const app = express();

const router = require('./routes');

// 路由中间间
app.use('/',router);

app.listen(3001,function () {
    console.log('app has been started at 3001');
})