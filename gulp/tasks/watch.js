var gulp = require('gulp');
var recess = require('gulp-recess');
var handleErrors = require('../utils/handleErrors');
var notify = require('gulp-notify');

// Start the server
gulp.task('watch', function() {
  gulp.watch([
    'public/js/**/*.js',
    '!public/js/**/all.js',
    '!public/js/**/all.min.js'], ['scripts-complexity', 'scripts']);
  gulp.watch('public/sass/**/*.scss', ['styles']);
});  
