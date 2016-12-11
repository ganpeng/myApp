'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
module.exports = {
    entry : [
        path.join(__dirname, 'client/index.js')
    ],
    output : {
        path : path.join(__dirname, 'dist'),
        filename : "[name]-[hash].js",
        publicPath : '/'
    },

    module : {
        loaders : [
            {
                test : /\.js$/,
                include : path.join(__dirname, 'client'),
                loaders : ['babel']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss?pack=default')   // css的class为随机字符串
                // loader: ExtractTextPlugin.extract('style', `css!postcss?pack=default`) // css的class为用户定义的字符串
            }
        ]
    },

    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),        
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name]-[hash].css")
    ],

    resolve : {
        extentions: ['', '.js']
    },

    postcss : function (bundler) {
        return {
            default: [
                require('postcss-partial-import')({
                addDependencyTo: bundler
                }),
                require('postcss-custom-properties')(),
                require('postcss-custom-media')(),
                require('postcss-media-minmax')(),
                require('postcss-custom-selectors')(),
                require('postcss-calc')(),
                require('postcss-nesting')(),
                require('postcss-color-function')(),
                require('pleeease-filters')(),
                require('pixrem')(),
                require('postcss-selector-matches')(),
                require('postcss-selector-not')(),
                require('postcss-flexbugs-fixes')(),
                require('autoprefixer')({
                browsers: AUTOPREFIXER_BROWSERS
                }),
                require('postcss-mixins')(),
                require('postcss-advanced-variables')(),
                require('postcss-nested')(),
                require('postcss-extend')()
            ]
        }
    }
}
