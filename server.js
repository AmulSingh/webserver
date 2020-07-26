var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.requestLogger)

app.get('/help', middleware.privateLogger, function(req, res){
    res.send('help page is routed by server...')
});

app.use(express.static(__dirname+'/test-angular'));

app.listen(PORT, function(){
    console.log('Your Express Server is running and listenning on Port '+PORT+':')
});