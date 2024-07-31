import express from "express";
function logger(req, res , next){
    console.log("Request Meathod : " , req.method);
    console.log("Request URL : " , req.url);
    // next(); 
}
const app = express();
const port = 5000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
