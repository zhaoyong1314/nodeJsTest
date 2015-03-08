/**
 * Created by zy on 2015/3/8.
 */
var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie');
var movie = mongoose.model('Movie',movieSchema);

movie.exports = movie;
