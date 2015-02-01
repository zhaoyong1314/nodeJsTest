var express = require('express');
var router = express.Router();

router.get("/movie/:id",function(req,res){
  res.render('detail',{title:'detail page'});
});


module.exports = router;
