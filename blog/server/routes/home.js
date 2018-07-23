const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // delete req.session.user;
    const {user} = req.session;
    let status = false;
    if(user && user.username){
        status = true
    }

    res.json({
        err_no:0,
        err_msg:'',
        logined:status,
    })
})

module.exports = router;