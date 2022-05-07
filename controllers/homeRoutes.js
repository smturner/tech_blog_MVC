const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/dashboard', (req, res) => {
    res.render('newPost')
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/newPost');
        return;
    }
    res.render('users')
});



router.get('/post', async (req, res) => {
    try {
      const memberData = await Member.findByPk(req.session.member_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: PastWorkouts}],
      });
      const member = memberData.get({plain: true});
      res.render('pastworkouts', member)
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports=router