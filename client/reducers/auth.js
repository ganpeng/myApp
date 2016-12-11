import is from 'is_js'

import { SET_CURRENT_USER } from '../constants'


const initialState = {
    isAuthorized : false,
    user : {}
}

export function authReducer(state = initialState, action = {}) {
    
    switch(action.type) {
        case SET_CURRENT_USER : {
            return Object.assign({}, state, { isAuthorized : !is.empty(action.user), user : action.user})
        }
        default :
            return state 
    }

}