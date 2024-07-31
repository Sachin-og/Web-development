import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var autherized = false;
const app = express();
const port = 5000;

function toCheck(req, res , next){
    if(req.body["password"] == "ILoveProgramming"){
        autherized = true;
    }
    next();
    console.log(req.body);
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(bodyParser.urlencoded({extended : true}));
app.use(toCheck);
app.post("/check", (req,res) => {
if(autherized){
    res.redirect("/");
}
else{
    res.sendFile(__dirname + "/public/index.html");
}
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
