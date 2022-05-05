const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const bcrypt= require("bcrypt");


class User extends Model {}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                isAlphanumeric: true,
                len: [8],
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password ,10);
                return newUser
            },
            beforeUpdate: async(updateNewUser) => {
            updateNewUser.password = await bcrypt.hash(updateNewUser.password,10);
            return updateNewUser
        },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
)

module.exports = User