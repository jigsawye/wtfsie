var webpack = require('webpack');
var path = require('path');
var IS_PRODUCTION = (process.env.NODE_ENV === 'production');

var entry = (IS_PRODUCTION) ? [] : [
    'webpack/hot/only-dev-server'
];

var devtool = (IS_PRODUCTION) ? '' : 'eval-source-map';

var loaders = (IS_PRODUCTION) ? [] : ['react-hot'];

var plugins = (IS_PRODUCTION) ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compressor: { warnings: false }
    })
] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

var config = {
    entry: entry.concat(['./src/boot.js']),
    output: {
        path: path.join(__dirname, 'dist/scripts'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: loaders.concat(['babel']),
            exclude: /node_modules/
        }]
    },
    devtool: devtool,
    plugins: plugins
};

module.exports = config;