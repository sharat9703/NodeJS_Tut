let http = require('http');
let uc =require('upper-case');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(uc.upperCase('hello world!'));
    res.end();
}).listen(8080);