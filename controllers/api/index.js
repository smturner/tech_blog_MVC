const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/login', userRoutes);

module.exports = router;
