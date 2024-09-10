const express = require('express')
const app = express()

const indexRouter = require('./routes')

// 리액트 프로젝트 경로 설정
const path = require('path')
app.use(express.static(path.join(__dirname,'..','frontend','build')));  // 정적파일 연결 (npm run build 설치한 이후임_ npm run build란 ? 프로덕션 배포를 위한 최적화된 빌드 파일을 생성하는 기능)

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);  
})