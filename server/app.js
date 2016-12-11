'use strict'

import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../webpack.config.dev'
import db from './models'

import middleware from './config/express'
import routes from './routes'


const compiler = webpack(webpackConfig)
const port = process.env.PORT || 3000
const app = express()


app.use(webpackDevMiddleware(compiler, {
    noInfo : true,
    publicPath : webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

middleware(app)
routes(app)


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


db.sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })


        app.get("/", (req, res) => {
            res.send('Hello, world!!!')
        })
    })