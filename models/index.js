const User = require("./user");
const Post = require("./post");
const Comments = require("./comments")

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comments, {
    foreignKey: '',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Post, {
    foreignKey: '',
})

module.exports = {User, Post, Comments}