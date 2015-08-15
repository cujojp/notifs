var gulp = require('gulp');
var sass = require('gulp-sass');
var filelog = require('gulp-filelog');
var autoprefix = require('gulp-autoprefixer');
var recess = require('gulp-recess');
var plumber = require('gulp-plumber');
var handleErrors = require('../utils/handleErrors');
var notify = require('gulp-notify');

gulp.task('styles', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefix())
    .pipe( plumber( { errorHandler: handleErrors } ) )
    .pipe(gulp.dest('./public/stylesheets'));
});
