var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var myproduct = new Schema({
       ID:  Number,
       Name: String,
       Brand:String,
       Price: Number,
       SubCategory: String,
       Quantity: Number,
       STOCK: Number
});

module.exports = mongoose.model('products', myproduct);