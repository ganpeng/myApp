'use stirct'

import {
    GET_VERIFICATION_CODE,
    SIGNUPREQUEST,
    SIGNUPREQUESTSUCCESS,
    SIGNUPREQUESTFAILURE
} from '../constants'
import axios from 'axios'


export function getVerificationCode({
    phone
}) {
    return dispatch => {
        axios.post('/auth/verify', {
                phone
            }).then((res) => {
                console.log(res.data)
                console.log('success')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export function signUp(data) {
    return dispatch => {
        dispatch(signUpRequest())
        axios.post('/auth/signup', data)
            .then((res) => {
                dispatch(signUpRequestSuccess(res.data))
            })
            .catch((err) => {
                dispatch(signUpRequestFailure('error'))
            })
    }
}


function signUpRequest() {
    return {
        type : SIGNUPREQUEST
    }
}


function signUpRequestSuccess(payload) {
    return {
        type : SIGNUPREQUESTSUCCESS,
        payload
    }
}


function signUpRequestFailure(payload) {
    return {
        type : SIGNUPREQUESTFAILURE,
        payload
    }
}