// 21.
// Create a simple Node.js application and serves it via an HTTP server 
// (without using Express). 
// The response of the server should display a text
// "Welcome to KMIT!" inside an <h1> tag on the webpage.
// Ensure that you have submitted the correct URL, 
// checks for the presence of the <h1> tag, and validates the text content.

const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('<h1>Welcome to KMIT!</h1>');
})

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000/');
});