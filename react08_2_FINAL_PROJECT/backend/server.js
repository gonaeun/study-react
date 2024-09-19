const express = require('express')
const app = express()
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
// const path = require('path')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',indexRouter)
app.use('/user',userRouter)

// app.use(express.static(path.join(__dirname,'..','frontend','build')))

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),()=>{
    console.log(`Server is running on ${app.get('port')}`);
})