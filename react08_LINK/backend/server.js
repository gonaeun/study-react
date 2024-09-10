const express = require('express')
const app = express()

const indexRouter = require('./routes')

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);  
})