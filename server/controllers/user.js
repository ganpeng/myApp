'use strict'

import co from 'co'
import jwt from 'jsonwebtoken'

import db from '../models'
import { _genSalt, _hash } from '../utils/hashPassword'

export function createUser(req, res) {
    co(function* () {
        const { username, password, email } = req.body

        if (yield db.User.findOne({where : { username }})) {
            return res.json({
                success : false,
                errors : {
                    username : '用户名已经存在'
                }
            })
        }

        if (yield db.User.findOne({where : {email}})) {
            return res.json({
                success : false,
                errors : {
                    email : '邮箱已经被注册'
                }
            })
        }

        const salt = yield _genSalt(10)
        const password_digist = yield _hash(password, salt)

        const user = yield db.User.create({username, email, password_digist})

        console.log(user.get('id'))
        console.log(user.get('username'))
        console.log(user.get('email'))

        // const token = jwt.sign({
        // }, 'jsonwebtokensecret')

        return res.json({
            success: true
        })

    })
    .catch((err) => {
        console.log(err)
    })
}



export default {
    createUser
}
