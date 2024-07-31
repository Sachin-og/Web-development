import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sachinAggarwal";
const yourPassword = "sachin@147";
const yourAPIKey = "11bdf8f3-09a5-4dcd-b926-db4aac2b50fd";
const yourBearerToken = "7065430f-369c-459b-9e7e-a3fd117f1e49";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
  const response1 = await axios.get(`https://secrets-api.appbrewery.com/random`);
  const result1 = response1.data;
  const cont = JSON.stringify(result1);
    res.render("index.ejs", { content: cont });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your prefrence",
    });
  }
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try{
    const response1 = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });;
    const result1 = response1.data;
    const cont = JSON.stringify(result1[Math.floor(Math.random() * result1.length)]);
      res.render("index.ejs", { content: cont });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No activities that match your prefrence",
      });
    }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  try{
    const response1 = await axios.get(`https://secrets-api.appbrewery.com/filter?apiKey=${yourAPIKey}`);
    const result1 = response1.data;
    const cont = JSON.stringify(result1[Math.floor(Math.random() * result1.length)]);
      res.render("index.ejs", { content: cont });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No activities that match your prefrence",
      });
    }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  try{
    const response1 = await axios.get(`https://secrets-api.appbrewery.com/secrets/62`,
    {
      headers:{
        Authorization: `Bearer ${yourBearerToken}`
      }
    }
    );
    const result1 = response1.data;
    const cont = JSON.stringify(result1);
      res.render("index.ejs", { content: cont });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No secrets that match your id",
      });
    }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
