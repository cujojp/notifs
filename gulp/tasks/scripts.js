var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var complexity = require('gulp-complexity');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var handleErrors = require('../utils/handleErrors');

gulp.task('scripts-complexity', function() {
  gulp.src([
    './public/js/**/*.js',
    '!./public/js/libs/*.js',
    '!./public/js/plugins/*.js',
    '!./public/js/all.js',
    '!./public/js/all.min.js',
    '!./public/js/**/utilities.js',
    '!./public/js/**/index.js',
    '!./public/js/**/*-enums.js',
  ])
  .pipe( plumber( { errorHandler: handleErrors } ) )
  .pipe(complexity({
    breakOnErrors: false,
    maintainability: 110,
    errorsOnly: false,
    cyclomatic: 5,
    halstead: 25
  }));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  var b = browserify({
    entries: './public/js/base/core.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/js/'));
});
