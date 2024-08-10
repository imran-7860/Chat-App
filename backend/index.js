const http = require('http')
const express = require('express')
const cors = require('cors')
const socketIo = require('socket.io')


const app = express()
app.use(cors());
const port = 4000 || process.env.PORT

app.get('/',(req,res)=>{
    res.send('hello')
})

const server = http.createServer(app)
const io = socketIo(server)

io.on("connection",()=>{
    console.log("new connection");
    
})
server.listen(port , ()=>{
    console.log(`server is working on http://localhost:${port}`);
    
})