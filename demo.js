require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Hello there this is your first output");

})

app.get("/jokes",(req,res) => {
    const jokes =[{

        id:"1",
        joke:"Joke"
    }]
    res.send(jokes);

})


app.get("/login",(req,res)=>{
    res.send("You are at login page");

})
app.listen(port,() => {
    console.log(`An app is listening in port ${port}`);
})