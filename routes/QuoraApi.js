var express=require('express');
var router=express.Router();


//Post request on regsiter
router.get('/',function(req,res){
  res.send("Hello World...!!!!");
});


module.exports=router;
