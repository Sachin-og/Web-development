import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

const app = express();
const port = 5000;
function bandNameGenerator(req , res , next){
  console.log(req.body);
  bandName = req.body["street"]  + " "+ req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(bodyParser.urlencoded({extended : true}));
app.use(bandNameGenerator);
app.post("/submit", (req,res) => {
  console.log(req.body);
  res.send(`<h1>Your Band Name is : </h1></br> <h2> ${bandName} ✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
