var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render(__dirname+'/src/views/pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render(__dirname+'/src/views/pages/about');
});

//app.listen(8080, ()=> {console.log("d")});
console.log('8080 is the magic port');
var server = require('http').createServer(app);
server.listen(8090, ()=>{});