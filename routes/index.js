var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'imooc 首页',
   movies:[{
     title:'机械战警',
     _id:1,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   },{
     title:'机械战警',
     _id:2,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   },{
     title:'机械战警',
     _id:3,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   },{
     title:'机械战警',
     _id:4,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   },{
     title:'机械战警',
     _id:5,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   },{
     title:'机械战警',
     _id:6,
     poster:"http://data.movie.kankan.com/movie/74105?id=751033"
   }
   ]});
  });

/* GET admin page  */
router.get("/admin",function(req,res){
  res.render('admin',{title:'imooc 后台录入页',
  movie:{
    title:'',
    doctor:'',
    country:'',
    year:'',
    poster:'',
    flash:'',
    summary:'',
    language:''
  }});
});

router.get("/admin/list",function(req,res){
  res.render('list', {title:'imooc 列表页',
    movie:{
      doctor:'何塞.帕蒂里亚',
      counter:'美国',
      title:'机械战警',
      _di:1,
      year:2014,
      language:'英语',
      flash:'www.baidu.com'
    }});
});

module.exports = router;
