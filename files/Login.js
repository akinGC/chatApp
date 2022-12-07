const express = require('express')
const path = require('path')
const route=express.Router()

route.use('/login',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','Login.html'))
  
})
route.use('/chat',(req, res, next)=>{
    res.redirect('/')
  
})


module.exports = route