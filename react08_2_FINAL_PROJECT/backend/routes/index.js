const express = require('express')
const router = express.Router()
// const path = require('path')

router.get('/', (req, res)=>{
    console.log('메인서버 접근!');
    // res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'));    
})

module.exports = router