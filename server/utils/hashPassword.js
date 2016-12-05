'use strict'

import { genSalt, hash, compare } from 'bcryptjs'
import { promisify } from 'bluebird' 


export default {
    genSalt : promisify(genSalt),
    hash : promisify(hash),
    compare : promisify(compare)
}



