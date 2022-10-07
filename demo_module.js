let http=require("http");
let dt=require("./myfirstmodule");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`The date and time right now are ${dt.date}`);
    res.end();
}).listen(8080);