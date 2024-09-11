const express = require('express')
const app = express()

const indexRouter = require('./routes')  // 라우터 설정

// 쿼리스트링 및 JSON 형식의 데이터 파싱
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 라우터 설정
app.use('/', indexRouter)

// 리액트 프로젝트 경로 설정
const path = require('path')
app.use(express.static(path.join(__dirname,'..','frontend','build')));  // 정적파일 연결 (npm run build 설치한 이후)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
//   });


// 포트 설정
app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);  
})