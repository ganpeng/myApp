'use strict'

import user from './user'
import movie from './movie'
import auth from './auth'

export default (app) => {

    app.use('/api/movie', movie)
    app.use('/api/user', user)
    app.use('/api/auth', auth)
    
}