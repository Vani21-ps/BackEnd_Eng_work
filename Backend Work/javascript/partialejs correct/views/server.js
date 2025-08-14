const express = require("express")

const app = express()
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get("/main", (req,res)=>{
    res.render("main")
});

app.listen(4021,()=> {
    console.log(`server is running on https://localhost:4021/main`);
});