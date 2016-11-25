'use strict'

export default {
    'development' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        host : '192.168.1.164',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10000
        }
    },

    'test' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        host : '192.168.1.164',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10000
        }
    },

    'production' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        host : '192.168.1.164',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10000
        }
    }
}