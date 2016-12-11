import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router'
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

render(
    <HashRouter>
        <Provider store={store}>
            <App /> 
        </Provider>
    </HashRouter>,
    document.getElementById('app')
)


if (module.hot) {
    module.hot.accept()
}