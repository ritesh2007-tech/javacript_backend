const express = require('express');
const app = express();
const port=4000;

app.get("/",(req,res)=>{
    res.send("Hello there this is your first output");

})
app.listen(port,() => {
    console.log(`An app is listening in port ${port}`);
})