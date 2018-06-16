"use strict"

const express = require('express');
const router = express.Router();

// 首页
router.get('/home',function (req, res) {
    res.json({
        a:1,
        b:2,
        c:3
    });
});

// 登录页面
router.get('/login',function (req, res) {
    res.json({
        logined:true
    });
});

// 登录接口
router.post('/do_login',function (req, res) {
    res.json({
        success:true,
        err_no:0
    });
});

// 注册页面
router.get('/register',function (req, res) {
    res.json({
        register:true
    });
});

// 注册接口
router.post('do_register',function (req, res) {
    res.json({
        success:true,
        err_no:0
    });
});

// 新增博客接口
router.post('/new_article',function (req, res) {
    res.json({
        success:true,
        err_no:0
    });
});

// 删除博客接口
router.post('/delete_article',function (req, res) {
    res.json({
        success:true,
        err_no:0
    });
});

// 添加评论接口
router.post('/add_comment',function (req, res) {
    res.json({
        success:true,
        err_no:0
    });
})

// 获取博客列表
router.get('/list',function (req, res) {
    res.json({
        list:[
            {1:'a'},
            {2:'b'},
            {3:'c'},
            {4:'d'}
        ]
    });
});




module.exports = router;