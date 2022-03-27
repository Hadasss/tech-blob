const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");

// TODO define model relations

// user can have many posts
User.hasMany(Post, {
  foreignKey: "post_id",
});

// post can have 1 user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// comment belongs to 1 yser
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// user can have many likes
User.hasMany(Like, {
  foreignKey: "user_id",
});

// like can belong to 1 user
Like.belongsTo(User, {
  foreignKey: "user_id",
});

// post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// comments belongs to many posts
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// post can have many likes
Post.hasMany(Like, {
  foreignKey: "post_id",
});

// like can belong to many posts // BUG TODO fix association: add through table
// Like.belongsToMany(Post, {
//   through: User,
//   as: "liked_posts",
//   foreignKey: "post_id",
// });

// // like can belong to many comments
// Like.belongsToMany(Comment, {
//   foreignKey: "comment_id",
// });

// // comment can have many likes
// Comment.hasMany(Like, {
//   through: Post,
//   as: "liked_comments",
//   foreignKey: "post_id",
// });

module.exports = { User, Post, Comment, Like };
