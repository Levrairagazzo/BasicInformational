var http = require('http');
var fs = require('fs');

const express = require('express');

//express app
const app = express();

//listen for requests

app.listen(8080);

app.get('/', (req, res) => {
    // console.log('Stating server');
    // res.send('<h2> Home page </h2>');
    res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
    // console.log('Stating server');
    // res.send('<h2> Home page </h2>');
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/contact-me', (req, res) => {
    // console.log('Stating server');
    // res.send('<h2> Home page </h2>');
    res.sendFile('./views/contact-me.html', {root: __dirname});
});

//404 page

app.use((req, res) => {
    res.status(404).sendFile('./vues/404.html', {root: __dirname} )
})