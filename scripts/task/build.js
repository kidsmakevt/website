'use strict';

var path = require('path');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var rm = require('del');
var mkdir = require('mkdirp');

var options = {
  batch: [[process.cwd(), 'src', 'partials'].join(path.sep)]
};

module.exports = function(srcDir, distDir, gulp, gulpsync) {

  gulp.task('clean-build', function(cb) {
    rm(distDir, function(err) {
      mkdir.sync(distDir);
      cb(err);
    });
  });

  gulp.task('build-index', function() {
    return gulp.src([srcDir, 'index.hbs'].join(path.sep))
              .pipe(handlebars({
                isHome: true
              }, options))
              .pipe(rename('index.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('build-about', function() {
    return gulp.src([srcDir, 'about.hbs'].join(path.sep))
              .pipe(handlebars({
                isAbout: true
              }, options))
              .pipe(rename('about.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('build-contact', function() {
    return gulp.src([srcDir, 'contact.hbs'].join(path.sep))
              .pipe(handlebars({
                isContact: true
              }, options))
              .pipe(rename('contact.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('build-gallery', function() {
    return gulp.src([srcDir, 'gallery.hbs'].join(path.sep))
              .pipe(handlebars({
                isGallery: true
              }, options))
              .pipe(rename('gallery.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('build-services', function() {
    return gulp.src([srcDir, 'services.hbs'].join(path.sep))
              .pipe(handlebars({
                isServices: true
              }, options))
              .pipe(rename('services.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('build-typography', function() {
    return gulp.src([srcDir, 'typography.hbs'].join(path.sep))
              .pipe(handlebars({
                isTypography: true
              }, options))
              .pipe(rename('typography.html'))
              .pipe(gulp.dest(distDir));
  });

  gulp.task('copy-js', function() {
    return gulp.src([srcDir, 'js', '**', '*'].join(path.sep))
                .pipe(gulp.dest([distDir, 'js'].join(path.sep)));
  });

  gulp.task('copy-css', function() {
    return gulp.src([srcDir, 'css', '**', '*'].join(path.sep))
                .pipe(gulp.dest([distDir, 'css'].join(path.sep)));
  });

  gulp.task('copy-fonts', function() {
    return gulp.src([srcDir, 'fonts', '**', '*'].join(path.sep))
                .pipe(gulp.dest([distDir, 'fonts'].join(path.sep)));
  });

  gulp.task('copy-images', function() {
    return gulp.src([srcDir, 'images', '**', '*'].join(path.sep))
                .pipe(gulp.dest([distDir, 'images'].join(path.sep)));
  });

  gulp.task('build', gulpsync(['clean-build',
                        'build-index',
                        'build-about',
                        'build-contact',
                        'build-gallery',
                        'build-services',
                        'build-typography',
                        'copy-js',
                        'copy-css',
                        'copy-fonts',
                        'copy-images'], function() {
                        }));

};
