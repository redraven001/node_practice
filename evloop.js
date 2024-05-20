// const {readFile}=require('fs')
// console.log("start of task")
// const path = require('path');
// const filePath = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'a.txt');
// readFile(filePath,'utf8',(err,res)=>{
//     if(err){
//         console.log(err)
//         return

//     }
//     console.log(res)
//     console.log("First task over")
// })
// console.log("Next task starts")

// console.log("next task")
// setTimeout(()=>{
//     console.log("second task")
// },0)
// console.log("3rd")

// set interval does the task even 2sec or given in the arg
// setInterval(()=>{
//     console.log("repaet")
// },2000)

const ht=require('http')
const sr=ht.createServer((req,res)=>{
    console.log('request event')
    res.end("halooo")
})
sr.listen(5000,()=>{
    console.log("server listening to 5000")
})