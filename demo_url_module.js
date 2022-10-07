let url = require('url');

let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
 
let q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let q_data = q.query;

console.log(q_data.year);

console.log(q_data.month);