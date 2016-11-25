'use strict'

import { GETBLOG } from '../constants'

export function getBlog(id) {
    return {
        type : GETBLOG,
        id
    }
}
