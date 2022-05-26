var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobsRouter = require('./routes/jobs');
var jobCartegorytRouter = require('./routes/jobCategory');

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
app.use('/users', usersRouter);
app.use('/jobCategory', jobCartegorytRouter);
app.use('/jobs', jobsRouter);


module.exports = app;
