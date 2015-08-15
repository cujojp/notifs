var gulp = require('gulp');
var svg = require('gulp-svg-sprite');
var plumber = require('gulp-plumber');
var handleErrors = require('../utils/handleErrors');
var notify = require('gulp-notify');
var config = {
  mode: {
    symbol: true,
    sprite: 'icons.svg',
    svgId: '%f'
  }
};

gulp.task('svg', function () {
  gulp.src(['./public/svg/icons/**/*.svg', '!./public/svg/patterns/*.svg'])
    .pipe(svg(config))
    .pipe(gulp.dest('./public/svg' ));
});
