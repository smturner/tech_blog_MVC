const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const bcrypt= require("bcrypt");


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
)

module.exports = User


