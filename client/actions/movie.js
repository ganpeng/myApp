import {
    ADD_MOVIE_REQUEST,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_FAILURE 
} from '../constants'

import axios from 'axios'


export function addMovie(movieData, userId) {
    return dispatch => {
        // dispatch(addMovieRequest())
        return axios.post(`/api/movie/${userId}`, movieData)
            // .then((res) => {
            //     if (res.data.success) {
            //         dispatch((addMovieSuccess(res.data)))
            //     } else {
            //         dispatch(addMovieFailure(err))
            //     }
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
    }
}


function addMovieRequest() {
    return {
        type : ADD_MOVIE_REQUEST
    }
}


function addMovieSuccess() {
    return {
        type : ADD_MOVIE_SUCCESS
    }
}

function addMovieFailure() {
    return {
        type : ADD_MOVIE_FAILURE
    }
}

export function getMovie(userId) {
    return dispatch => {
        return axios.get(`/api/movie/${userId}`)
    }
}