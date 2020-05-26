const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index');
})
Router.get('/courses',(req, res) => {
    res.render('courses');
})
Router.get('/contact',(req, res) => {
    res.render('contact');
})

Router.get('/about',(req, res) => {
    res.render('about');
})
Router.get('/movies',(req, res) => {
    res.render('movies');
})
Router.get('/movies/new',(req, res) => {
    res.render('newmovie');
})
module.exports =  Router;