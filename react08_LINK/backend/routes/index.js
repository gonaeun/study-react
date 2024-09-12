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
            res.send({result:"failed"})    // 데이터가 없을 때
        }
        conn.end();
    })

    // 리액트 페이지로 데이터 응답 보내기 (웹f12에서 보여짐)
    // res.send({result:"success"}) >> 위에 조건문에 이용!
    
})

 // 실습) 회원가입, 로그인 처리할 수 있는 기능 구현
 router.post("/join",(req,res)=>{

    console.log(req.body);
    // 백엔드에서 콘솔은 터미널창에 보여짐
    
    let id = req.body.member.id;
    let pw = req.body.member.pw;
    let nickName = req.body.member.nickName;

    let sql = 'INSERT INTO NODEJS_MEMBER (id, pw, nickname) VALUES (?, ?, ?)';
    conn.query(sql, [id, pw, nickName], (err,rows) => {
        if (err){console.log("회원가입 중 오류 발생", err);}
        
        if(rows){
            res.send({result:"success"})
        }else{
            res.send({result:"fail"})
        }
        conn.end
    });
});

router.post('/login',(req,res)=>{

    const {userId, userPw} = req.body;
    const sql = 'SELECT * FROM NODEJS_MEMBER WHERE ID=? AND PW=?';
    conn.query(sql, [userId, userPw], (err, rows) =>{
        if (err){
            console.log("로그인 실패", err);
            res.send({result:"failed"})
        } else if (rows.length > 0){
            res.send({result:"success"});
        } else {
            res.send({result:"failed"})
        }
        conn.end();
    })

});
module.exports = router;