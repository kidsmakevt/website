'use strict';

var path = require('path');
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var distDir = [process.cwd(), 'dist'].join(path.sep);
var options = {
  batch: [[process.cwd(), 'src', 'partials'].join(path.sep)]
};

gulp.task('build-index', function() {
  return gulp.src([process.cwd(), 'src', 'index.hbs'].join(path.sep))
            .pipe(handlebars({}, options))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build-index'], function() {
});
