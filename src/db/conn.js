const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Dmart",{
 useNewUrlParser :true,
 useUnifiedTopology:true,
//  useCreateIndex:true
}).then(() => {
console.log('connection successful');
}).catch((e) =>{
                      console.log('no connection');
})
 const NewSchema =new mongoose.Schema({
       ID:Number,
       Name:String,
       Brand :String,
       Price: Number,
       SubCategory: String,
       Quantity:String,
       Stock:Number

                           
 })
const product=new mongoose.model("product",NewSchema);

const createDocument = async () =>{
    try{
const newDoc =new product({
                      ID: 506,
                      Name:"scissor",
                      Brand :"penguin",
                      Price: 50,
                      SubCategory: "home",
                      Quantity:"100",
                      Stock: 50          
})
                      
                      const result = await newDoc.save();
                      console.log(result);
    }catch(err){
                      console.log(err)
    }
}
createDocument();
const getDocument =async()=>{
                      // const result =await product.find({Name:"scissor"}).select({Name:1,Price:1,Stock:1});
                      const result =await product.find({Price:{$eq:50}}).select({Name:1,Price:1,Stock:1});
                      console.log(result);
}
getDocument();

const updateDocument =async() =>{
            const result =await product.update({ID:506},{$set:{'Stock': 100}});
            console.log(result);

}
updateDocument();

//  const deleteDocument= async() =>{
//     const result = await product.remove({"ID" : 506});
//     console.log(result);
//  }
//  deleteDocument();





