var express = require('express');
var application = require('./application.js');

var app = express();

app.get('/user/new/:name/:age', function(request, response){
    var name = request.params.name;
    var age = request.params.age;
    var userController = new application.UserController();
    response.send(userController.save(name, age));
});

app.get('/user', function(request, response){
    var userController = new application.UserController();
    response.send(userController.list());
});

app.listen(3000, function(){});