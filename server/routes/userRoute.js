const Authorize = require('../Auth/Authorize')
const route=require('express').Router()
const { registerUser, loginUser, logoutUser, getMe, updateUserDetails, updateUserPassword, deleterUser, searchUser } = require('../controller/userController')


route.post('/register',registerUser)
route.post('/login',loginUser)
route.get('/logout',logoutUser)
route.get('/getme',Authorize,getMe)
route.get('/updateuserdetails',Authorize,updateUserDetails)
route.get('/updatepassword',Authorize,updateUserPassword)
route.delete('/deleteuser',Authorize,deleterUser)
route.get('/search',Authorize,searchUser)

module.exports=route
