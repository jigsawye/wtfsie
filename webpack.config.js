'use strict';
var webpack = require('webpack');
var IS_PRODUCTION = (process.env.NODE_ENV === 'production') ? true : false;
var PORT = process.env.PORT || 8080;

var entry = (IS_PRODUCTION) ? [] : [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
];

var loaders = (IS_PRODUCTION) ? [] : ['react-hot'];

var config = {
    entry: entry.concat(['./src/js/app.js']),
    output: {
        path: './dist/scripts',
        publicPath: '/scripts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: loaders.concat(['babel']),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;