//creating a huge file 
 const path=require('path')
 const fp = path.join('C:', 'Users', 'Asus', 'OneDrive', 'Desktop', 'codes from VS', 'web', 'node', 'nth', 'c.txt');
// const {writeFileSync}=require('fs')
// for(let i=0;i<10000;i++){
//     writeFileSync(fp,`hello motto ${i}\n`,{flag:'a'})
// }
const{createReadStream}=require('fs')
const stream=createReadStream(fp,{highWaterMark: 10000000})
stream.on('data',(res)=>{
    console.log(res)
})
stream.on('error',(err)=>{
    console.log(err)
})