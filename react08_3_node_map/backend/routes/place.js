const express = require('express')
const router = express.Router()

router.get('/position', (req,res)=>{
    const positions = [
        {
          title: "조선대학교",
          latlng: { lat: 35.14286910264934, lng: 126.93473004681526 },
        },
        {
          title: "ACC 국립아시아문화전당",
          latlng: { lat: 35.14726850762825, lng: 126.92087732500086 },
        },
        {
          title: "창억떡집",
          latlng: { lat: 35.14886812190646, lng: 126.92760298052951 },
        },
        {
          title: "동구청",
          latlng: { lat: 35.14615224045482, lng: 126.92308415258312 },
        },
      ]

      res.json({position : positions})
})

module.exports = router