const fs=require('fs');
let data="hello arnav"
fs.writeFile("a.txt",data ,'utf-8',(err)=>{ if (err) throw err;});
console.log("hi"); //executes first 
