const router = require('express').Router();
const { User, Post, Comments } = require('../models');


// route that renders the homepage blogposts
router.get('/', async (req, res) => {
  try {
    const dashboardData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comments,
          attributes: ["id", "comment_content", "post_id", "user_id", "date_created"],
          include: {
            model: User,
            attributes: ["name"]
          }
        }
      ],

    });
    const posts = dashboardData.map((post) => post.get({ plain: true }))

    res.render('homepage',
      {
        posts,
        logged_in: req.session.logged_in
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup')
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login')
});

// route for comments
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(
      req.params.id,

    );
    const post = postData.get({ plaine: true });
    res.render("single-post", {
      post,
      logged_in: req.session.logged_in,
    })
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return
    }
  } catch (err) {
    res.status(400).json(err)
  }
});



module.exports = router

