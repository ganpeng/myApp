'use strict'

let initialState = [
    {
        id : 1,
        title : 'javascript',
        body : 'This is javascript body'
    },
    {
        id : 2,
        title : 'html',
        body : 'This is html body'
    }
]



export default (state=initialState, action={}) => {
    switch(action.type) {
        default :
            return state
    }
}