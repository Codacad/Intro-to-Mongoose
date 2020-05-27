const Router = require('express').Router();
const Movies = require('../models/movies');

Router.get('/',(req, res) => {
    Movies.find({}, (err, movie) => {
        if(err){
            res.status(400).send(err)
        }
        res.render('movies', {
            movie
        });
    })
})
Router.get('/api',(req, res) => {
    Movies.find({}, (err, docs) => {
        if(err){
            console.log(err)            
        }
        res.send(docs);
    })
})
Router.get('/new',(req, res) => {
    res.render('newmovie');
})
Router.post('/',(req, res) => {
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.replace(/\s*, \s*/g, ",");
    if(req.body.cast){
        req.body.cast = req.body.cast.split(',');
    }

    const movie = new Movies(req.body);

    movie.save(function(err){
        if(err){
            res.render('newmovie');
        }
        res.render('movies')
    })
    console.log(req.body);
})

module.exports = Router;