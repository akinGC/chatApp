const express = require('express')

const app = express()
const login = require('./files/Login.js')
const chat = require('./files/chat.js')

// app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(login)
app.use(chat)
app.listen(3000)