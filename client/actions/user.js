import axios from 'axios'

import { SET_CURRENT_USER } from '../constants'


export function signUp(userData) {
    return dispatch => {
        return axios.post('/api/user', userData)
    }
}


export function setCurrentUser(user) {
    return {
        type : SET_CURRENT_USER,
        user
    }
}

export function login(userData) {
    return dispatch => {
        return axios.post('/api/auth', userData)
    }
}