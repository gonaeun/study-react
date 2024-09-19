const express = require('express')
const app = express()
const indexRouter = require('./routes')
const userRouter = require('./routes/user')

// 교차 출처 리소스 공유(CORS)
// - 같은 도메인이 아닌 경우에 요청/응답 제한
// - 모든 요청/응답에 대해 허용하거나, 특정 도메인에 대해 허용 해줄 경우 >> npm i cors 설치
const cors = require('cors')

app.use(cors())
app.use('/', indexRouter)
app.use('/user', userRouter)

app.use(express.urlencoded({extended:false}))
app.use(express.json())


// const path = require('path')
// app.use(express.static(path.join(__dirname,'..','frontend','build')))

app.set('port',process.env.PORT || 3001)
app.listen(app.get('port'),()=>{
    console.log(`Server is running on ${app.get('port')}`);
})