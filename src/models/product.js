
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NewSchema =new mongoose.Schema({
    ID:Number,
    Name:String,
    Brand :String,
    Price: Number,
    SubCategory: String,
    Quantity:String,
    Stock:Number

                        
})

const ProductModel = mongoose.model("product", NewSchema)
module.exports = ProductModel