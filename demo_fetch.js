import fetch from 'node-fetch';

let api = "https://amazon-clone-urw3.onrender.com/categories";

fetch(api,{
    body:JSON.stringify()
})
.then(res=>res.json())
.then(data=>console.log(data));
