'use strict'

export default (sequelize, DataTypes) => {
    
    const Movie = sequelize.define('Movie', {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        desc : {
            type : DataTypes.TEXT,
            allowNull : false
        }
    }, {
        classMethods : {
            associate : (models) => {
                Movie.belongsTo(models.User, {
                    onDelete : "CASCADE",
                    foreignKey : {
                        allowNull : false
                    }
                })
            }
        }
    })

    return Movie

}