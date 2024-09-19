const express = require('express')
const router = express.Router()

router.post('/join', (req,res)=>{
    console.log('회원가입 요청');  
});

router.post('/login', (req,res)=>{
    console.log('로그인 요청') 
});


module.exports = router