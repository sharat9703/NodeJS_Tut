let fs = require('fs');
fs.writeFile("myfile.txt","my file reads like this",(err)=>{
    if(err) throw err;
    console.log("done!");
});