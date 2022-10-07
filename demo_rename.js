let fs = require('fs');
fs.rename('myfile.txt','myfile2.txt',(err)=>{
    if(err) throw err;
    console.log("file renamed!");
})