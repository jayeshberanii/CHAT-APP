const Authorize = require('../Auth/Authorize')
const { accessChat, fetchChat } = require('../controller/chatController')
const route=require('express').Router()

route.get('/accesschat',Authorize,accessChat)
route.get('/fetchChat',Authorize,fetchChat)

module.exports=route