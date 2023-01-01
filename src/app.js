const express =require("express");
const path= require("path");
const app=express();
require("./db/conn");
const port = process.env.PORT || 3000;
const static_path= path.join(__dirname,"../public");
app.set('view engine','ejs');
// app.use(express.static(static_path))

app.get("",(req,res) =>{
  res.render("index",{firstName:"Samruddhi"});
})
// app.get("/",(req,res) =>{
//     res.send("hello from Samruddhi !")
// });
app.listen(port,() =>{
  console.log('server is running at port ',port);
})
// const product=new mongoose.model("product",NewSchema);
// app.post("/result", (req, res)=>{
  // const SaveProduct = new ProductModel(req.body)
  // SaveProduct.save((error, savedProduct)=>{
  //     if(error) throw error
  //     res.json(savedProduct)
  // })
  //  product.find({},(err,result)=>{
  //   if(result)
  //   {
  //     users=result;
      
  //   }
  //  })

// })

//dmartnew.stockdata