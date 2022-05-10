const { User } = require("../models");

const userData = [
  {
    name: "Sarah",
    email: "sarah123@gmail.com",
    password: "password",
  },
  {
    name: "Henry",
    email: "Henry123@gmail.com",
    password: "password1",
  },
  {
    name: "Harrison",
    email: "Harrison321@gmail.com",
    password: "password2",
  },
  {
    name: "Clara",
    email: "clara123@gmail.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;