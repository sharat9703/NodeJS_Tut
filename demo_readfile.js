let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('demo_file1.html',(err,data)=>{
        
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        
        return res.end();
});
}).listen(8080);