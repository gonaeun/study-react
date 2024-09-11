const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db.js')

router.get('/',(req,res)=>{
    console.log('main router!');
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'));
})

router.post('/getData', (req,res)=>{
    console.log('Form으로 요청이 들어옴', req.body.data);

    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)';

    conn.query(sql, ['admin',1234,req.body.data], (err,rows)=>{
        // 두번째 인자는 위의 sql문 values에 들어갈 값 3가지
        if(err) {console.log('insert query 이슈 발생!');}

        if(rows){
            res.send({result:"success"})  // 데이터가 있을 때
        }else{
            res.send({result:"faild"})    // 데이터가 없을 때
        }
    })

    conn.end();

    // 리액트 페이지로 데이터 응답 보내기 (웹f12에서 보여짐)
    // res.send({result:"success"})
    
})

module.exports = router