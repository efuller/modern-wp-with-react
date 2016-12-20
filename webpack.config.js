var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/assets',
        filename: "scripts.js"
    },
    resolve: {
        extensions: ['', '.js', '.html', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ],
	devtool: 'inline-source-map'
};