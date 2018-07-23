const express = require('express');
const router = express.Router();
const UserModel = require('../models/user/userModel');

// 登录页面

router.get('/',function (req, res) {
    const body = req.body;
    const {user} = req.session;
    let status = false;
    if(user && user.username){
        status = true
    }
    res.json({
        logined:status,
        user:user && user.username
    });
});

router.post('/do_login',function (req, res) {
    const {username,password} = req.body;
    if(!username || !password){
        res.json({
            err_no:3,
            err_msg:'用户名密码不能为空'
        });
        return;
    }

    // findOne查询是异步执行的
    UserModel.findOne({username},'password',(err,document)=>{
        console.log(document);
        if(err){
            res.json({
                err_no:500,
                err_msg:'服务器查询失败'
            })
            return;
        }
        if(document.password === password){
            req.session.user = {username};
            res.json({
                err_no:0,
                err_msg:'',
                loginSuccess:true
            })
            return;
        }
        res.json({
            err_no:5,
            err_msg:'用户名或密码不正确'
        })
    });

});

module.exports = router;