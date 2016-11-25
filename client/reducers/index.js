'use strict'

import { combineReducers } from 'redux'

import blogs from './blogs.js'


const rootReducer = combineReducers({
    blogs
})


export default rootReducer