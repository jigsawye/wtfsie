'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    contentBase: 'dist',
    devtool: 'eval-source-map',
    hot: true,
    stats: {
        progress: true,
        colors: true
    },
});

server.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening on localhost:3000');
});
