const express = require("express")

const app = express()
app.set("view engine", "ejs");

app.get("/main1", (req,res)=>{
    res.render("main1")
});

app.listen(4021,()=> {
    console.log(`server is running..`);
});