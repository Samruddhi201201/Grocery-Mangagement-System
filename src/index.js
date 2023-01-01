const express = require('express')
const app = express()
const mongoose = require("mongoose")
const ProductModel = require("./models/product")
var connectionUrl = "mongodb://localhost:27017/NewDB"
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) throw err
    console.log("Connected")
})

app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.send("connected")
})

app.get("/home", (req, res)=>{
    res.render("index")
})

// router.get('/get-data', function(req, res, next) {
    
//     var resultArray = [];
    
//     mongoose.connect(url, function(err, db) {
//         assert.equal(null, err);
//         var cursor = db.collection('products').find();
//         cursor.forEach(function(err, doc) {
//             assert.equal(null, err);
//             resultArray.push(doc); 
//         }, function() {
//             db.close;
//             res.render('index', {items: resultArray});
//         });
//     });
    
//     res.redirect('/');
// });

app.post("/api/product", (req, res)=>{
    const SaveProduct = new ProductModel(req.body)
    SaveProduct.save((error, savedProduct)=>{
        if(error) throw error
        res.json(savedProduct)
    })
})

app.listen(9000, ()=>{
    console.log("listening to port 9000")
})