// HINTS:
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// 1. Import express and axios
const app = express();
const port = 3000;
// 2. Create an express app and set the port number.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
// 3. Use the public folder for static files.
app.get("/", async (req,res) =>{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    const resp = result.data;
    console.log(resp);
    res.render("index.ejs", {secret : resp.secret, user : resp.username});
});
// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.listen(port , (req, res)=>{
    console.log(`listening on port ${port}`);
});
// 6. Listen on your predefined port and start the server.
