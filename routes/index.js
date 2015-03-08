var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie');
var _ = require('underscore');

mongoose.connect('mongodb://localhost/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  Movie.fetch(function(err,movie){
     if(err){
        console.log(err);
     }
    res.render('index', {
      title: 'test首页',
      movies:movies
    })
  })
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

//admin update movie
router.get("/admin/update/:id",function(req,res){
   var id = req.params.id;
  if(id){
   Movie.findById(id,function(err,movie){
      res.render('admin',{
        title:'后台更新页',
        movie:movie
      })
   });
  }
});



//admin post movie
router.post('/admin/movie/new',function(req,res){
  var  id = req.body.movie._id;
  var movieObj = req.body.movie;
  var _movie ;
  if(id!='undefined'){
    Movie.findById(id,function(err,movie){
     if(err){
       console.log(err);
     }
      _movie= _.extend(movie,movieObj);
      _movie.save(function(err,movie){
        if(err){
          console.log(err);
        }
        res.redirect('/movie/'+movie._id)
      });
    });
  }
  else{
    _movie = new Movie({
      doctor:movieObj.doctor,
      title:movieObj.title,
      country:movieObj.country,
      language:movieObj.language,
      year:movieObj.year,
      poster:movieObj.poster,
      summary:movieObj.summary,
      flash:movieObj.flash
    })
    _movie.save(err,function(){
        if(err){
          console.log(err);
        }
      res.redirect('/movie/'+ movie._id)
    })
    }
});

router.get("/admin/list",function(req,res){
  Movie.fetch(function(err,movies){
    if(err){
      console.log(err);
    }
    res.render('list', {
          title:'imooc 列表页',
          movies:movies
        });
    })
});

module.exports = router;
