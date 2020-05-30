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

// Delete Movie
Router.get('/delete/:id',(req, res) => {
    Movies.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            res.status(400).send(err)
        }
        res.redirect('/movies');
    })
})

// Movies Api
Router.get('/api',(req, res) => {
    Movies.find({}, (err, docs) => {
        if(err){
            console.log(err)            
        }
        res.send(docs);
    })
})

// Add Movie routes
// Get
Router.get('/add-new-movie',(req, res) => {
    res.render('newmovie');
})
// Post
Router.post('/add-new-movie',(req, res) => {
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.replace(/\s*, \s*/g, ",");
    if(req.body.cast){
        req.body.cast = req.body.cast.split(',');
    }

    const movie = new Movies(req.body);
    const errors = {};
    const success = {}
    movie.save(function(err){
        if(err){
            errors.msg = "Some went wrong...";
        }else{
            success.msg = "Movie added successfully...";
        }   
        res.render('newmovie', {
            errors,
            success            
        })     
    })
    console.log(req.body);
})

// Movie Detail Route

Router.get('/:title', (req, res) => {
    Movies.find({title:req.params.title}, (err, movie) => {
        if(err){
            console.log(err)
        }
        res.render('movie-detail', {
            movie
        })
    })    
})

Router.post('/:title', (req, res) => {
    Movies.findOne({title:req.params.title}, (err, movie) => {
        if(err){
            console.log(err)
        }
        const error = {}
        const success = {}
        movie.reviews.push(req.body)
        movie.save((err, doc) => {
            if(err){
                error.msg = 'Something went wrong'
            }else{
                success.msg = "Your reviews have been added successfully"
            }
            res.redirect(`/movies/${req.params.title}`)  
                    
        })
    })
})
module.exports = Router;