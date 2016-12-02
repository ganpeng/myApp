'use strict'

import {
    SIGNUPREQUEST,
    SIGNUPREQUESTSUCCESS,
    SIGNUPREQUESTFAILURE
} from '../constants'

const initialState = {
    user : {},
    loginIsLoading : false,
    signUpIsLoading : false,
    signUpError : '',
    loginError : ''
}


export default function auth(state=initialState, action={}) {
    switch(action.type) {
        case SIGNUPREQUEST : {
            return Object.assign({}, state, {
                signUpIsLoading : true,
                signUpError : ''
            })
        }
        case SIGNUPREQUESTSUCCESS : {
            return Object.assign({}, state, {
                signUpIsLoading : false,
                signUpError : '',
                user : action.payload
            })
        }
        case SIGNUPREQUESTFAILURE : {
            return Object.assign({}, state, {
                signUPIsLoading : false,
                signUpError : action.payload,
                user : {}
            })
        }
        default :
            return state
    }
}