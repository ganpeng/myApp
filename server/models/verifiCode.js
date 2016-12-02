'use strict'

export default (sequelize, DataTypes) => {

    const VerifiCode = sequelize.define('VerifiCode', {
        phone : {
            type : DataTypes.TEXT
        }
        number : {
            type : DataTypes.TEXT
        }
    })

    return VerifiCode

}