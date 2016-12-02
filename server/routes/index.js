'use strict'

import user from './user'
import auth from './auth'

export default (app) => {

    app.use('/user', user)
    app.use('/auth', auth)
}