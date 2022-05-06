const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id",
            },
        },
        },
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'comments'
          },
)


module.exports = Comments
