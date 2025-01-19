// 9c.
// Write a NodeJS program to accept a file name from user, text from user, if file exists append the text to the 
// file. If not create a new file and add the text to it.

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the file name:", (fileName) => {
    const filePath = path.join(__dirname, fileName);
    rl.question("Enter the text to add:", (text) => {
        fs.access(filePath,fs.constants.F_OK,(err)=>{
            if(err){
                fs.writeFile(filePath,text,(err)=>{
                    if(err){
                        console.error(`Error writing file: ${err.message}`);
                        return;
                    }
                    console.log("File created and text added successfully.");
                });
            }
            else{
                fs.appendFile(filePath,text,(err)=>{
                    if(err){
                        console.error(`Error appending file: ${err.message}`);
                        return;
                    }
                    console.log("Text appended to file successfully.");
                });
            }
        }
        );  
        rl.close();
    }
    );
});