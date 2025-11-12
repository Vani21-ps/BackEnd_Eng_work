const express=require("express");
const app=express();
app.use(express.json());


app.use("/api/v1/order",require("./api/routes/order"));


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
