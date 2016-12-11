'use strict'

const path = require('path')
const webpack = require('webpack')

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
]

module.exports = {
    entry : [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/index.js')
    ],
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js',
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
                loader: 'style!css?modules!postcss?pack=default'
            }
        ]
    },

    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })        
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
