'use strict'

import express from 'express'

import {
    getVeriCode,
    signUp
} from '../controllers/auth'


const router = express.Router()



router.post('/verify', getVeriCode)
router.post('/signup', signUp)


export default router