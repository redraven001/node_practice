// const ht=require('http')
// const sr=ht.createServer((req,res)=>{
//     if(req.url==='/')
//         res.end('home page')
//     if(req.url==='/about')
//        {res.end('about page')
//     //blocking code ie the execution stops here until this task ins done
//             for(let i=0;i<1000;i++){
//                 for(let j=0;j<1000;j++){
                    
//                 }
//             }
//         }
//     res.end('404')
// })
// sr.listen(5000,()=>{
//     console.log("server listenning on 5k")
// })

//cleaner async approach for file system

const path=require('path')
const fp = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'a.txt');
const fpb = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'b.txt');
const {readFile,writeFile}=require('fs');
//more faster using promisify
const util=require('util')
const rfpromise=util.promisify(readFile)
const wfpromise=util.promisify(writeFile)
// const readfile=(pt)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(pt,'utf8',(err,data)=>{
//             if(err){
//              reject(err)
//             }
//             else{
//             resolve(data)
//             }
//          })
//     })
// }
//readfile(fp).then(result=>console.log(result)).catch((err)=>console.log(err))

const start = async () => {
    try {
        const f = await rfpromise(fp,'utf8');
        console.log(f);  
        await wfpromise(fpb,'new write using promisify')
        const s = await rfpromise(fpb,'utf8');
        console.log(s);  
    } catch (err) {
        console.log(err);
    }
};

start();
