'use strict'

const webpack = require('webpack')
const path = require('path')


module.exports = {
    entry : [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/index.js')
    ],
    output : {
        path : '/',
        filename : 'bundle.js',
        publicPath : '/'
    },
    module : {
        loaders : [
            {
                test : /\.js$/, 
                include : path.join(__dirname, 'client'),
                loaders : ['babel']
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
        extentions : ['', '.js']
    }
}
