// 9a.
// Write a Node JS program that accepts a port from the user and runs a node server at that port.

const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function startServer(port){
    const server = http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World!\n');
    })
    server.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}/`);
    })
    server.on('error',(err)=>{
        console.error(`Error starting server: ${err.message}`);
    });
}

rl.question("Enter the port number to run the server: ",(port)=>{
    const portNumber = parseInt(port,10);
    startServer(portNumber);
    rl.close();
})