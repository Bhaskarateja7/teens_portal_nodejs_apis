var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var vRouter = require('./routes/vendor');
var tRouter = require('./routes/teen');
var jobRouter = require('./routes/job')
var parentRouter = require('./routes/parent')


var app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/vendors', vRouter);
app.use('/teen', tRouter);
app.use('/jobs' ,jobRouter)
app.use('/parent' ,parentRouter)
module.exports = app;
