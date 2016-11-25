'use strict'

export default (sequelize, DataTypes) => {

    const Task = sequelize.define('Task', {
        title : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        classMethods : {
            associate : (models) => {
                Task.belongsTo(models.User, {
                    onDelete : "CASCADE",
                    foreignKey : {
                        allowNull : false
                    }
                })
            }
        }
    })

    return Task

}