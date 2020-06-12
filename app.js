const express = require('express');
var app = express();

app.set('view-engine','ejs');

app.get('/', function(req,res){
    res.render('index.ejs');
});

app.get('/login', function(req,res){
    res.render('login.ejs');
});

app.get('/profile/:id', function(req, res){
    var data = {
        id: req.params.id,
        name: req.params.id,
        hobbies: ['Music', 'Shitposting', 'Hating']
    }
    res.render('profile.ejs',data);
});

app.listen(3000);