const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try{
        const dashboardData = await Post.findAll({
          include: [
            {
              model: User,
              attributes:['name'],
            },
          ],
           
        });
        const posts = dashboardData.map((post) => post.get({plain:true}))

        res.render('homepage', {
          posts,
          logged_in:req.session.logged_in
        });
        // res.status(200).json(dashboardData);
    }catch (err) {
        res.status(500).json(err);
    }

});

router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post}],
    });
    const user = userData.get({plain:true});
    res.render('dashboard ', user)
  }catch (err) {
    res.status(500).json(err)
  }
});

router.get('/new-post', (req, res) => {
  res.render('newPost')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login')
});




module.exports=router

