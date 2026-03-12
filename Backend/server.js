const express = require("express")
require("dotenv").config()
const cors = require("cors")

const connectDB = require("./Database/config")
const userRouter = require("./routes/userRoutes")
const {login} = require("./Controllers/authController")
const taskRoutes = require("./routes/taskRoutes")

const server = express()

server.use(express.json())
server.use(cors("*"))

connectDB();

server.get('/', (req,res)=>{
    console.log('request recived')
    res.send('Hello')
})

server.post('/admin', (req,res)=>{
    console.log(req.body)
    res.send("Admin Login Success")
})
 server.post('/login',login)

server.post('/user', (req,res)=>{
    console.log(req.body)
    res.send("User Login Success")
})

server.post('/employee', (req,res)=>{
    console.log(req.body)
    res.send("Employess Login Success")
})

server.use((req,res,next)=>{
    console.log('request recieved')
    next()
})

server.use('/api/user',userRouter)
server.use("/tasks", taskRoutes)


server.listen(5000,()=>{
    console.log(`server running on port: http:localhost:5000`)
})


