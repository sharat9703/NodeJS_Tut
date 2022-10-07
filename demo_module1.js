let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello world, how are you doing");
    res.end();
}).listen(8080);