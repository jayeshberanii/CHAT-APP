const Authorize = require('../Auth/Authorize')
const { sendMessage, allMessages } = require('../controller/messageController')
const route=require('express').Router()

route.post('/',Authorize,sendMessage)
route.get('/:chatId',allMessages)


module.exports=route