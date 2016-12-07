import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'


import App from './containers/App'
import store from './store'
import { fetchMovie } from './actions'
import setAuthHeader from './utils/setAuthHeader'
import { setCurrentUser } from './actions/user'

const token = localStorage.getItem('token')
setAuthHeader(token)


if (token) {
    store.dispatch(setCurrentUser(jwtDecode(token)))
}

store.dispatch(fetchMovie())


render(
    <BrowserRouter>
        <Provider store={store}>
            <App /> 
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
)


if (module.hot) {
    module.hot.accept()
}