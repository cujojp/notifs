var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var include = require('gulp-include');
var complexity = require('gulp-complexity');
var uglify = require('gulp-uglify');
var filelog = require('gulp-filelog');
var handleErrors = require('../utils/handleErrors');
var notify = require('gulp-notify');

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
  return gulp.src('./public/js/base/global.js')
      .pipe(include())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(include())
      .pipe(concat('all.min.js'))
      .pipe(uglify({
        mangle: true
      }))
      .pipe(gulp.dest('./public/js'));
});
