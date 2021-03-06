const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes')
const newPost = require("./newPost");


router.use('/user', userRoutes);
router.use('/comments', commentsRoutes)
router.use('/newpost', newPost);

module.exports = router;
