import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store'
import { fetchMovie } from './actions'

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