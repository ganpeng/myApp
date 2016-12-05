import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_REQUEST_SUCCESS,
    FETCH_MOVIE_REQUEST_FAILURE
} from '../constants'

const initialState = {
    isFetching : false,
    movies : [],
    error : null
}

export default function movieReducer(state=initialState, action={}) {
    switch(action.type) {
        case FETCH_MOVIE_REQUEST : {
            return Object.assign({}, state, {
                isFetching : true
            })
        }
        case FETCH_MOVIE_REQUEST_SUCCESS : {
            return Object.assign({}, state, {
                isFetching : false,
                movies : [...action.movies],
                error : null
            })
        }
        case FETCH_MOVIE_REQUEST_FAILURE : {
            return Object.assign({}, state, {
                isFetching : false,
                error : actions.error
            })
        }
        default :
            return state
    }
}


