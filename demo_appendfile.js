let fs =require('fs');
fs.appendFile("new_file.txt","Content inside the txt file",(err)=>{
    if(err) throw err;
    console.log("no error");
});