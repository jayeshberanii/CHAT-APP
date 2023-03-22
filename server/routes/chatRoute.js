const Authorize = require('../Auth/Authorize')
const { accessChat, fetchChat, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require('../controller/chatController')
const route=require('express').Router()

route.post('/chat',Authorize,accessChat)
route.get('/chat',Authorize,fetchChat)
route.post('/groupchat',Authorize,createGroupChat)
route.put('/groupchat',Authorize,renameGroup)
route.post('/groupchat/user',Authorize,addToGroup)
route.delete('/groupchat/user',Authorize,removeFromGroup)



module.exports=route