const mongoose = require("mongoose");
const storeDB = "storeDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${storeDB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>{
        console.log(`You are connected to ${storeDB}.`)
    })
    .catch((err)=>{
        console.log(`There was a problem connecting to ${storeDB} - error:`, err)
    })