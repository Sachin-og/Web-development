const { isUtf8 } = require("buffer");
const fs = require("fs");
fs.writeFile("message.txt", "Hello from Node js ", (err)=>{
    if (err) throw err;
    console.log("this file has been saved");
})
fs.readFile("message.txt","utf8",function(err,data){
    if (err) throw err;
    console.log(data);
})