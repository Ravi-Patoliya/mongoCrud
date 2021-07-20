var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var database = require('./config/datbase');
var methodOverride = require('method-override');

var port     = process.env.PORT || 8888;
app.use(express.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(express.json());                                     // parse application/json
app.use(express.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


mongoose.connect(database.url);

app.listen(port);
console.log("App listening on port : " + port);

//api route
app.use('/api',require('./controllers/controller.js'));