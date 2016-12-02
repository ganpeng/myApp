'use strict'

import { combineReducers } from 'redux'

import blogs from './blogs.js'
import auth from './auth.js'


const rootReducer = combineReducers({
    blogs,
    auth
})


export default rootReducer