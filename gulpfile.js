'use strict';
var path = require('path');

var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var tasksDirectory = [process.cwd(), 'scripts', 'task'].join(path.sep);

// command line options.
var argsv = require('minimist')(process.argv.slice(2));
var port = argsv.port || 8001;

// src & dir directories.
var srcDir = [process.cwd(), 'src'].join(path.sep);
var distDir = [process.cwd(), 'dist'].join(path.sep);

// Launch Task base.
var launchTask = require([tasksDirectory, 'launch.js'].join(path.sep));
// Import build tasks.
require([tasksDirectory, 'build.js'].join(path.sep))(srcDir, distDir, gulp, gulpsync.sync);

gulp.task('launch', function() {
  launchTask(port, distDir);
});

