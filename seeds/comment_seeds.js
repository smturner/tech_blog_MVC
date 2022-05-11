const { Comments } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 4,
    comment_content: "Wow!",
  },
  {
    user_id: 2,
    post_id: 4,
    comment_content: "Nice Job!",
  },
  {
    user_id: 1,
    post_id: 3,
    comment_content: "Awesome, nice job guys!",
  },
  {
    user_id: 3,
    post_id: 1,
    comment_content: "Could be better",
  },
  {
    user_id: 2,
    post_id: 4,
    comment_content: "Well done!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_content: "Pretty cool!",
  },
  {
    user_id: 4,
    post_id: 3,
    comment_content: "Cant wait for the update.",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_content: "About time!",
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;