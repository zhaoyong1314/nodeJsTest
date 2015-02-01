var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });

/* GET admin page  */
router.get("/admin",function(req,res){
  res.render('admin',{title:'admin page'});
});

router.get("/admin/list",function(req,res){
  res.render('list',{title:'list page'});
});

module.exports = router;
