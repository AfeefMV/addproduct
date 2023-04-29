// import mongoose
const mongoose =require('mongoose')
// define connection string
const connection_url =
"mongodb+srv://afeefm8:9946@cluster0.vlfwpts.mongodb.net/test";
mongoose.connect(connection_url, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

// create a model to store all product
const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    brand:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

module.exports={
    Product
}