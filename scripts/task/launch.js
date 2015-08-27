'use strict';

var os = require('os');
var path = require('path');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');
require('colors');

module.exports = function(port, distDir) {

  var serve = serveStatic(distDir, {
    index: 'index.html'
  });
  var app = connect();
  app.use(serve);

  var server = http.createServer(app).listen(port, function() {
    console.log('Local server started on ' + port + '...'.white);
    console.log('Serving static content from ' + distDir + '.'.white);
    console.log('Note: If using `watch` command, remember to start the livereload browser extension!'.yellow);
    console.log('http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-'.yellow);
    console.log(('[PID] ' + process.pid).white);
    open('http://localhost:' + port);
  });

};

