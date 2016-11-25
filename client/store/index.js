'use strict'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from '../reducers'


const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = logger()
const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, sagaMiddleware)
)


export default store
