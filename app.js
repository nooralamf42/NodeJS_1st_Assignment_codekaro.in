const express = require("express");
const App = express();
const ejs = require("ejs");

App.set("view engine", "ejs");

App.get("/", (req,res)=> res.render("home"));
App.get("/about", (req,res)=> res.render("about"));
App.get("/contact", (req,res)=> res.render("contact"));


App.get("*",(req, res)=>{
    res.send("<h1 style='text-align:center; margin-top: 25px'>404 Not Found :/</h1>");
})

App.listen(3000, (()=> console.log("Server is running at 3000 PORT.")));