var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var nodemailer=require("nodemailer");
var mysql = require('mysql');
var session = require('express-session');
var dbConnectionPool = mysql.createPool({
    host: '127.0.0.1',
    database: 'WDCproject1',
    username: 'root',
    password: ''
});

app.use(function(req,res,next){

    req.pool = dbConnectionPool;
    next();
});
//oc

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session code from Ernest
// the session code
app.use(session({
  //           //
    secret: 'secret',          //           //
    resave: false,                              // THIS CODE //
    saveUninitialized: true,                    //           //
    cookie: { secure: false }                   //           //
}));


app.post('/',function(req, res, next) {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: "gmail", //replace with your email provider
        auth: {
          user: 'wdcprojectsocialtry002@gmail.com',
          pass: 'gqqeiyojedkxtawl',
        },
      });

      const mailOptions = {
          from:'wdcprojectsocialtry002@gmail.com',
          to:req.body.email,
          subject: `From ${req.body.email}`,
          text:`You are invited to the Events as below`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send("Something went wrong.");
        } else {
          console.log('email sent')
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
});



app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler (IAN code)
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
