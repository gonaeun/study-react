const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    console.log('main router!');
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'));
})

router.post('/getData', (req,res)=>{
    console.log('Form으로 요청이 들어옴', req.body);
    
})

module.exports = router