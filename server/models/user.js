'use strict'

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username : {
            type : DataTypes.STRING,
            // allowNull : false
            unique : true
        },

        nickName : {
            type : DataTypes.STRING
            // allowNull : false
        },

        gender : {
            type : DataTypes.ENUM,
            values : ['female', 'male']
        },

        email : {
            type : DataTypes.STRING
        },

        phone : {
            type : DataTypes.STRING,
            allowNull : false
        },

        birthday : {
            type : DataTypes.DATE
        },

        isguy : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },

        isRegister : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },

        verifiCode : {
            type : DataTypes.TEXT
        }
    }, {
        timestamps : true,
        classMethods : {
            associate : (models) => {
                User.hasMany(models.Task)
            }
        }
    })

    return User

}