'use strict'

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },

        nickName : {
            type : DataTypes.STRING,
            allowNull : false
        },

        gender : {
            type : DataTypes.ENUM,
            values : ['female', 'male']
        },

        email : {
            type : DataTypes.STRING
        },

        phone : {
            type : DataTypes.STRING
        },

        birthday : {
            type : DataTypes.DATE
        },

        isguy : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
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