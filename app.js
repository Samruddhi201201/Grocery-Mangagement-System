const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const mongoose = require("mongoose")
const ProductsModel = require("./schema/product")
var connectionUrl = "mongodb://localhost:27017/dmart2001"
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) throw err
    console.log("Connected")
})
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
                      res.render('index')
                  })
app.post("/add", (req, res)=>{
    const SaveProduct = new ProductsModel(req.body)
    SaveProduct.save((error, savedProduct)=>{
        if(error) throw error
        console.log("Product added successfully");

    })
})
app.get("/add",(req,res)=>{
    res.render('add');
})



let users;
app.get('/display',(req,res)=> ProductsModel.find({},(err, result)=> {
  if (err) {
    console.log(err);
  } else {
    users=result;
    res.render('display-table',{users:result});
  }
}));


 
app.get('/delete',(req,res)=>{
  res.render('delete')

})
app.post('/delete',function(req,res){
  const id=req.body.ID;
  console.log(id)
      ProductsModel.deleteOne({ID:id},function (err, project) {
        if (err) {
          console.log(err);
        } else {
          console.log("Product deleted successfully");
          res.write("Product deleted successfully")
          console.log(project);
        }
      })
})
app.get('/find',(req,res)=>{
  res.render('find')

})
let products;
app.post('/find',(req,res)=>{
  const str=req.body.Name;
  ProductsModel.find({ Name: new RegExp(str,"i")}, function (err, product) {
        if (err) {
          console.log("Product not found!!");
        } else {
          
         res.render('find-display',{users: product})
          console.log(product);
        }
      });
})


app.get('/update',(req,res)=>
{
  res.render('update')
})
app.post('/update',(req,res)=>{
    const id=req.body.ID;
    const val=req.body.Newval;
    ProductsModel.updateOne({ID:id},{$set :{STOCK:val}})
    
})

app.listen(9000, ()=>{
    console.log("listening to port 9000")
})

module.exports = app;