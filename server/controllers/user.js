'use strict'

import co from 'co'


export function getUser(req, res) {
    console.log(req.body)
}


export function createUser(req, res) {
    console.log(req.body)
    res.send(req.body)
}


export function updateUser(req, res) {
    console.log(req.body)
}


export function deleteUser(req, res) {
    console.log(req.body)
}