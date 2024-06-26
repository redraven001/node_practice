
//OS module

const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(os.uptime()/360)
const currentOs={
    name:os.type(),
    release:os.release(),
    mem:os.totalmem(),
    fremem:os.freemem()
}
console.log(currentOs)

//PATH module
const path=require('path')
console.log(path.sep)
const filepath=path.join('/nth','a.txt')
console.log(filepath)
console.log(path.basename(filepath))
console.log(path.resolve(__dirname))

//FILE Modle (FS)

//syncronus 
const fpb = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'b.txt');
const fp = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'a.txt');
const {readFileSync,writeFileSync}=require('fs')
const f=readFileSync(fp,'utf8')
console.log(f)
writeFileSync(fp,'Hello bit*hes')
console.log(f)

//asyncronus
const {readFile,writeFile}=require('fs')
readFile(fp,'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result) 
    writeFile(fpb,'utf8fytfytv',(err,result)=>{
        if(err)
             return;
    })
   
})

//HTTP Module
const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end("welcome to home")
    }
    if(req.url==='/about'){
        res.end("Our History")
    }
    res.end(`<h1>404 Not Found</h1>`)
})
server.listen(5000)
