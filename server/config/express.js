'use strict'

import compression from 'compression'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import connectMongo from 'connect-mongo'

const MongoStore = connectMongo(session)

export default (app) => {

    app.use(compression())
    app.use(express.static(path.join(__dirname, '../../client')))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(cookieParser())

    app.use(session({
        secret: 'keyboard cat',
        saveUninitialized: false, // don't create session until something stored
        resave: false, //don't save session if unmodified
        store: new MongoStore({
            url: 'mongodb://192.168.1.164/test-app',
            touchAfter: 24 * 3600 // time period in seconds
        })
    }));

}