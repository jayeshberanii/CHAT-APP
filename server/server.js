const express=require('express')
const app=express()
const http=require('http')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
// const socketIO=require('socket.io')

dotenv.config()

require('./DBconn/conn')

const server=http.createServer(app)
// const IO=socketIO(server)

// IO.on("connection",(socket)=>{
//     console.log("new client connected");

//     socket.on("disconnect",()=>{
//         console.log("client disconnected!");
//     })
//     socket.on("message",(data)=>{
//         console.log("message :",data);
//         io.emit("message",data)
//     })
// })

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api/users',require('./routes/userRoute'))
app.use('/api/chat',require('./routes/chatRoute'))

server.listen(process.env.PORT,()=>{
    console.log('server is successfully running on',process.env.PORT);
})