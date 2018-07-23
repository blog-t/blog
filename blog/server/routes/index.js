"use strict"

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const UserModel = require('../models/user/userModel');

// 首页
// router.get('/home',function (req, res) {
//     console.log("======================");
//     console.log(req.body);
//     const user = req.cookies.user;
//     if(req.cookies.blog){
//         res.json({
//             success:true,
//             loginStatus : true
//         })
//     }else {
//         res.json({
//             success:false,
//             loginStatus:false
//         })
//     }
// });

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