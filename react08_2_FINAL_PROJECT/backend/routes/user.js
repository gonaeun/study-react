const express = require('express')
const router = express.Router()
const conn = require('../config/db')

router.post('/join', (req,res)=>{
    console.log('회원가입 요청');  
    console.log(req.body);

    let {id, pw, nick} = req.body
    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)'

    conn.connect();
    conn.query(sql, [id,pw,nick], (err, rows)=>{
        if(err) {console.log('회원가입 오류발생', err); }

        if(rows){
            res.json({result:'success'})
        }else{
            res.json({result:'fail'})
        }

    })
    
    conn.end();
});

router.post('/login', (req,res)=>{
    console.log('로그인 요청') 

    let {id,pw} = req.body;
    console.log('로그인 요청받음',req.body);
    
    let sql = "SELECT * FROM NODEJS_MEMBER WHERE ID=? AND PW=?";

    conn.connect();

    conn.query(sql, [id,pw], (err,rows)=>{
        if(err){ console.log("로그인 오류 발생", err);}
    
        console.log('db에서 가져온 로그인 정보',rows);

        if(rows.length > 0){
            res.json({result:"success", nick:rows[0].NICKNAME});
            console.log("로그인 성공~!");
        }else{
            res.json({result:"fail"});
        }
    })
});


module.exports = router