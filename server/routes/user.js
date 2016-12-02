'use strict'

import express from 'express'

import {
    getUser,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/user'

const router = express.Router()



router.get('/:user', getUser)

router.post('/', createUser)

router.put('/:user', updateUser)

router.delete('/:user',deleteUser)



export default router