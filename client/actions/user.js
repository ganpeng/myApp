import axios from 'axios'


export function signUp(userData) {
    return dispatch => {
        return axios.post('/api/user', userData)
    }
}