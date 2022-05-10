const { Post } = require("../models");

const postData = [
  {
    title: "Testing Testing one two three",
    post_content: "This is the first blog post of the tech blog, please enjoy!",
    user_id: 1,
  },
  {
    title: "Testing Testing three two one!",
    post_content:
      "Please feel free to use tech blog to share about any tech related items you would like to discuss with others!",
    user_id: 2,
  },
  {
    title: "Lets talk about tech",
    post_content: "There are so many cool technologies out there. Please share your favorite one and why!",
    user_id: 2,
  },
  {
    title: "New to the tech world?",
    post_content:
      "I joined 6 years ago and would love to offer some advice about how to get in, what jobs to look for, and what programs are the best to get you going in the right direction",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;