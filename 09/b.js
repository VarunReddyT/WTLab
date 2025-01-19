// 9b.
// Write a NodeJS program to read from a file and display the content on screen.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.error(`Error reading file: ${err.message}`);
        return;
    }
    console.log("File Content : ");
    console.log(data);
})