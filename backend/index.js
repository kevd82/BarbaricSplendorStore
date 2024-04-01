const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://barbaricsplendor:0y3bAI5OJJzCXROT@cluster0.o4ikkmg.mongodb.net/BarbaricSplendor");

app.get("/", (req,res)=>{
    res.send("Express App is running")
})

app.listen(port,(error)=>{
    if (!error){
        console.log("You have conquered port "+port+"!")
    }
    else
    {
        console.log("Error : "+error)
    }
})