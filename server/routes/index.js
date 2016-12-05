'use strict'

import user from './user'
import movie from './movie'

export default (app) => {

    app.use('/api/movie', movie)
    
}