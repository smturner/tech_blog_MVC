const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes')
const dashboardRoutes = require('./dashboardRoutes');


router.use('/user', userRoutes);
router.use('/comments', commentsRoutes)
router.use('/dashboard', dashboardRoutes);

module.exports = router;
