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

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

app.post("/upload", upload.single("product"), (req, res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})
app.use("/images", express.static("upload/images"));

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    imagetwo:{
        type:String,
    },
    imagethree:{
        type:String,
    },
    imagefour:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true
    },
    created:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})

app.post("/addproduct", async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id: id,
        title: req.body.title,
        image: req.body.image,
        imagetwo: req.body.imagetwo,
        imagethree: req.body.imagethree,
        imagefour: req.body.imagefour,
        category: req.body.category,
        price: req.body.price,
        weight: req.body.weight,
        description: req.body.description,
        stock: req.body.stock,
    });
    console.log(product);
    await product.save();
    console.log("Saved "+req.body.title);
    res.json({
        success:true,
        name:req.body.title,
    })
})

app.post("/removeproduct", async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed product ID: "+req.body.id);
    res.json({
        success:true,
        name:req.body.title,
    })
})

app.get("/allproducts", async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})

app.listen(port,(error)=>{
    if (!error){
        console.log("You have conquered port "+port+"!");
        
        
    }
    else
    {
        console.log("Error : "+error)
    }
})