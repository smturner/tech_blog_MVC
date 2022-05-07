const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentsRoutes = require('./commentsRoutes')

router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentsRoutes)

module.exports = router;
