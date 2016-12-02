'use strict'

import co from 'co'

import db from '../models'
import verificationCode from '../utils/verificationCode'

const client = require('twilio')('AC131099df9a799f7657e34a6feb171c37', '4fb907700ba26d36a95ee235198762ee')


export function getVeriCode(req, res) {
    co(function* () {
        const phone = req.body.phone
        const verifiCode = verificationCode()
        
        let user = yield db.User.findOrCreate({where : {phone}}) 
        if (user) {
            yield db.User.update({verifiCode}, { where :{phone} })
            client.sendMessage({
                to: `+86${phone}`,
                from: '+12013895478',
                body: `验证码是：${verifiCode}`
            }, (err, data) => {
                if (err) {
                    console.log(err)
                }
                console.log(data)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

export function signUp(req, res) {
    co(function* () {
        const { phone, verificationCode } = req.body
        let user = yield db.User.findOne({
            where : {
                phone
            }
        })

        if (!user) {
            res.status(401).json({
                success : false,
                message : {
                    phone : '请填写正确的手机号'
                }
            })
        }


        if (user && user.isRegister) {
            res.status(401).json({
                success : false,
                message : {
                    phone : '手机号已经注册了，请尝试登录'
                }
            })
        }

        if (user && !user.isRegister && user.verifiCode !== verificationCode) {
            res.status(401).json({
                success : false,
                message : {
                    verifiCode : '验证码输入错误'
                }
            })
        }


        if (user && !user.isRegister && user.verifiCode === verificationCode) {
            user = yield db.User.update({isRegister : true}, {where : {phone}})
            res.status(200).json({
                success : true 
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
