var gulp = require('gulp');
var config = require('../utils/config');
var routes = require('../../routes/index');
var React = require('react');
var jadeUtils = require('../utils/jade-utils');

// Starts the express server.
// Taken from app.js, so this could probably be a lot
// cleaner.
gulp.task('startexpress', function() {
  var express = require('express');
  var path = require('path');
  var favicon = require('static-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');


  var app = express();

  // so much pizza
  app.use(function(req, res, next){
    res.locals = jadeUtils;
    next();
  });

  // view engine setup
  app.set('views', path.join(config.express._viewsDirectory));
  app.set('view engine', 'jade');
  app.set('port', (process.env.PORT || 5000))

  app.use(favicon());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(cookieParser());

  app.use(express.static(path.join(config.express._asstesDirectory)));
  app.use(
    '/public', 
    express.static(path.join(__dirname, 'public')));

  // define our routes and methods to call.
  app.use('/', routes);
  app.use('/location', routes);

  /// catch 404 and forwarding to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
  });
  module.exports = app;
});

