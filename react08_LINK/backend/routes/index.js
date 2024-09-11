const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    console.log('main router!');
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'));
})

router.post('/getData', (req,res)=>{
    console.log('Form으로 요청이 들어옴', req.body);

    // 리액트 페이지로 데이터 응답 보내기 (웹f12에서 보여짐)
    res.send({result:"success"})
    
})

module.exports = router