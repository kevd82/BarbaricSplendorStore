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

const fetchUser= async(req,res,next)=>{
    const token = req.header("auth-token");
    if (!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,"secret_ecom");
            req.user = data.user;
            next();
        } catch (error){
            res.status(401).send({errors:"Please authenticate with valid token"})
        }
    }

}

app.post("/addtocart", fetchUser, async (req,res)=>{

    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.send("Added")
})

const Users = mongoose.model("Users" ,{
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

app.post("/signup", async (req, res)=>{

    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false, errors:"Email address already in use."})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users ({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data, "secret_ecom");
    res.json({success:true, token})
})

app.post("/login", async (req,res)=>{
    let success = false;
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            success = true;
            const token = jwt.sign(data, "secret_ecom");
            res.json({success, token});
        }
        else{
            return res.json({success:false, errors: "Error in login info"});
        }
    }
    else {
        return res.json({success:false, errors: "Error in login info"})
    }
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