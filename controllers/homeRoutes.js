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

// Render the single post page
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_content',
      'title',
      'date_created',
    ],
    include: [
      {
        model: User,
        attributes: ['name']
      },
      {
          model: Comments,
          attributes: ['id', 'comment_content', 'post_id', 'user_id', 'date_created'],
          include: {
              model: User,
              attributes: ['name']
          }
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const posts = dbPostData.get({ plain: true });
      res.render('single-post', {
          posts,
          logged_in: req.session.logged_in
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router

