var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// create the express session & SQL part
var session = require('express-session');
var mysql = require('mysql');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// setup connection pool, after app
var dbConnectionPool = mysql.createPool( {host: 'localhost', database: 'adminAccount' });

// order does matter!!!
app.use(function(req, res, next) {

    // making "dbConnectionPool available in req.pool
    req.pool = dbConnectionPool;

    // pass the request on
    next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// the session code
app.use(session({
    //           //
    secret: 'kjdsfkjgfkjhkfjghkahjfg',          //           //
    resave: false,                              // THIS CODE //
    saveUninitialized: true,                    //           //
    cookie: { secure: false }                   //           //
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
