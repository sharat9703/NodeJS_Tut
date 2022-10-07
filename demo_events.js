let fs =require("fs");
let rs = fs.createReadStream('./myfile.txt');
rs.on('open',()=>{
    console.log("file is open");
});