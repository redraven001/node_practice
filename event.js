const EventEmitter=require('events')
//custom emitter
const customEmitter=new EventEmitter()
customEmitter.on('response',(name,rank)=>{
    console.log(`data recived for rank ${rank} and name ${name}`)
})
customEmitter.on('response',()=>{
    console.log('Another one possibly duplicated')
})
customEmitter.emit('response',"deva",6999)

//builtin events
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    res.end("skibiddi ")
})
server.listen(404)
