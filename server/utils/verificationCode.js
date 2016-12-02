'use strict'

import speakeasy from 'speakeasy'

const secret = 'rNONHRni6BAk7y2TiKrv'


export default function generatorCode() {
    return speakeasy.hotp({ secret: secret, counter: 45 });
}



