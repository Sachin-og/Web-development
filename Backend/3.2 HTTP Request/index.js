import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("Hello ");
});
app.post("/register", (req, res) => {
    res.sendStatus("201");
});
app.put("/user/sachin", (req, res) => {
    res.sendStatus("200");
});
app.patch("/user/sachin", (req, res) => {
    res.sendStatus("200");
});

app.listen(5000, ()=> {
    console.log(`server running on port ${port}`);
});

