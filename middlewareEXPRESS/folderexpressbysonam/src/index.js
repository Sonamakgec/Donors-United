const express=require('express');
const app=express();
const path = require('path');
const staticPath = path.join(__dirname, "../public");
app.use(express.urlencoded({ extended: false }));
//built in middleware
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("hello world ,welcome in server through node express");
   
})

app.get('/about',(req,res)=>{
    res.send("hello world, welcome to the about page");
})


app.post("/register", (req, res) => {
    console.log(req.body.firstname);
})
app.listen(3000,()=>{
    console.log("the port is listening");
})