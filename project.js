//project.js
//views

const express = require('express');


const project = express();


project.set('view engine', 'ejs');
project.set('views')


project.listen(3000);


project.get('/', (req,res) => {
    res.sendFile('./views/home.html',  {root: __dirname})
});

project.get('/home', (req,res) => {
    res.redirect('/');
});

project.get('/about', (req, res) => {
    res.sendFile('./views/about.html',  {root: __dirname})
});

project.get('/create', (req,res) => {
    res.sendFile('./views/create.html',  {root: __dirname})
});

project.use((req,res) => {
    res.sendFile('./views/404.html',  {root: __dirname})
});

