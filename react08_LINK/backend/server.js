const express = require('express')
const app = express()

const indexRouter = require('./routes')

// 리액트 프로젝트 경로 설정
const path = require('path')
app.use(express.static(path.join(__dirname,'..','frontend','build')));  // 정적파일 연결

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);  
})