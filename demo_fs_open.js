let fs = require("fs");
fs.open('my_file1.txt','w',(err,file)=>{
if (err) throw err;
console.log("Saved!");
});