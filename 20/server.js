const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url == '/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
    else if(url == '/products'){
        fs.readFile(path.join(__dirname,'products.html'),(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Page not found');
    }
})

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000/');
});