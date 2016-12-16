var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var bourbon = require('node-bourbon');
var neat = require('node-neat');
var normalize = require('node-normalize-scss');

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
    sassLoader: {
        includePaths: [
            bourbon.includePaths,
            neat.includePaths[1],
            normalize.includePaths
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ],
	devtool: 'inline-source-map'
};