var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname + '/../client/views'));
app.set('view engine', 'pug');

app.use(express.static('src/client'));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/bower_components', express.static('bower_components'));

app.use('/', index);

var server = http.createServer(app);

server.listen(3001, function() {
    console.log('Server running on port 3001');
});