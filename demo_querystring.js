let http = require('http');
let url =require('url');

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'type/html'});
let q= url.parse(req.url,true).query;
let text = q.year+" "+q.month;
res.write(text);
res.end();
}).listen(8080);