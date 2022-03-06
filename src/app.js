const express=require('express');
const port =process.env.PORT||8000;
const path=require("path");
const app=express();

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/product-display",(req,res)=>{
    res.render("product-display");
})
app.get("/pd2",(req,res)=>{
    res.render("pd2");
})

app.listen(port,()=>{
    console.log(` connection success listening to ${port}`);
})