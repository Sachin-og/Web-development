import express from "express";
const port = 5000;
const app = express();

app.get("/" ,(req ,res) =>{
    const today = new Date();
    const day = today.getDay();
    let type = "It's WeekDay";
    let adv = "It's Time to work hard!"
    if(day == 0 || day == 6){
        type = "the weekend";
        adv = "it's time to have some fun";
    }
    res.render("index.ejs" ,
   { daytype: type,
    advice: adv,
});
});



app.listen(port , (req, res) =>{
    console.log(`Server listening on port ${port}`);
});
