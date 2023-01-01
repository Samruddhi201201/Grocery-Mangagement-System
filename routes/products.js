var express = require('express');
var router = express.Router();

var ProductsModel = require('../schema/product');


//List Table Data
// router.get('/display', function(req, res) {
//   UsersModel.find(function(err, products) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render('display-table', { products: products });
//       console.log(products);
//     }
// }); 
// });


// //Display Form 
router.get('/add', function (req, res, next) {
  res.render('index');
});


/* POST Data. */
router.post('/add', function (req, res, next) {
  console.log(req.body);

  const mybodydata = {
    ID: req.body.ID,
    Name: req.body.Name,
    Brand: req.body.Brand,
    Price: req.body.Price,
    SubCategory:req.body.SubCategory,
    Quantity:req.body.Quantity,
    Stock:req.body.Stock
  }
  var data = ProductsModel(mybodydata); 
  //var data = UsersModel(req.body);
  data.save(function (err) {
    if (err) {
    
     res.render('index',{message: 'Product Added  successfully!'});
    } else {
      
     res.render('index',{message: 'Product not added!'});
    }
  })
});

 /* DELETE User BY ID */
//  router.get('/delete/:id', function(req, res) {
//   UsersModel.findByIdAndRemove(req.params.id, function (err, project) {
//     if (err) {
    
//     req.flash('error_msg', 'Record Not Deleted');
//     res.redirect('../display');
//     } else {
      
//       req.flash('success_msg', 'Record Deleted');
//       res.redirect('../display');
//     }
//   });
// });


 /* GET SINGLE User BY ID */
// router.get('/edit/:id', function(req, res) {
//   console.log(req.params.id);
//   UsersModel.findById(req.params.id, function (err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
       
//       res.render('edit-form', {userDetail: user });
//     }
//   });
// });
 
/* UPDATE User */
// router.post('/edit/:id', function(req, res) {
//   UsersModel.findByIdAndUpdate(req.params.id, req.body, function (err) {
//     if(err){
//       req.flash('error_msg', 'Something went wrong! User could not updated.');
//       res.redirect('edit/'+req.params.id);
//   } else {
//     req.flash('success_msg', 'Record Updated');
//     res.redirect('../display');
//   }
//   });
// });

module.exports = router;
