const express = require('express');
const router = express.Router();
const UserModel = require('../models/user/userModel');

// 注册页面
router.get('/',(req,res)=>{
    console.log(req.session);
    req.json({
        success:true,
        err_no:0
    })
});

// 注册接口
router.post('/do_register',(req,res)=>{
    const {username} = req.body;
    if(!req.body.username || !req.body.password){
        res.json({
            err_no:1,
            err_msg:'用户名和密码不能为空',
            success:false
        })
    }
    // 查询数据库，如果该用户已经注册过，则返回注册失败
    const query = UserModel.where({username});
    query.findOne((err,userDoc)=>{
        if(err){
            res.json({
                err_no:500,
                err_msg:'数据库查询失败',
                success:false
            })
            return;
        }
        if(userDoc){
            // 该用户名已经注册过，不能重复注册
            res.json({
                err_no:2,
                err_msg:'该用户名已经被注册，同一用户名不能重复注册',
                success:false
            })
            return;
        }
        // 创建一个用户
        const user = new UserModel(req.body)
        // 将该用户保存到数据库中
        user.save(function (err) {
            if(err){
                return handleError(err)
            }
            // 设置session
            req.session.user = {username};
            console.log(req.session);
            // 保存成功
            res.json({
                err_no:0,
                success:true,
                results:[]
            })
            return;
        });
    });
})

module.exports = router;