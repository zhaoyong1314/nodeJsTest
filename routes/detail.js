var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie');


router.get("/movie/:id",function(req,res){
    var id = req.params.id;
    Movie.findById(id,function(err,movie){
    res.render('detail',  {
                title:'test 后台详情'+movie.title,
                movie:movie
            })
        })
    });


module.exports = router;
