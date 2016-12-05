import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_REQUEST_SUCCESS,
    FETCH_MOVIE_REQUEST_FAILURE
} from '../constants'

import axios from 'axios'

export function fetchMovie() {
    return dispatch => {
        dispatch(fetchMovieRequest())
        return axios.get('/api/movie')
            .then((res) => {
                console.log(res)
                dispatch(fetchMovieSuccess(res.data.movies))
            })
            .catch((err) => {
                console.log(err)
                dispatch(fetchMovieFailure('oh nonono!!!'))
            })
    }
}

function fetchMovieRequest() {
    return {
        type : FETCH_MOVIE_REQUEST
    }
}



function fetchMovieSuccess(movies) {
    return {
        type : FETCH_MOVIE_REQUEST_SUCCESS,
        movies
    }
}

function fetchMovieFailure(error) {
    return {
        type : FETCH_MOVIE_REQUEST_FAILURE,
        error
    }
}


