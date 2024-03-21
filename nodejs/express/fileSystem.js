const fs= require("fs")

fs.writeFile("myFile.txt","Hello Arun welcome to my World! ",(err)=>{
    if(err) throw err;
})

fs.appendFile("myFile.txt","hehehe",()=>{})

fs.open("myFile.txt","w",()=>{})