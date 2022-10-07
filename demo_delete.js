let fs= require('fs');
fs.unlink('myfile2.txt',(err)=>{
    if(err) throw err;
    console.log("file deleted!");
});