const router = require('express').Router();
const { User, Post, Comments } = require('../models');

// router.get('/comments', (req,res)=> {
//   res.render('single-post')
// }) 
// route that renders the homepage blogposts
router.get('/', async (req, res) => {
    try{
        const dashboardData = await Post.findAll({
          include: [
            {
              model: User,
              attributes:['name'],
            },
            {
              model: Comments,
              attributes:["id", "comment_content", "post_id","user_id", "date_created"],
              include:{
                model:User,
                attributes:["name"]
              }
            }
          ],
           
        });
        const posts = dashboardData.map((post) => post.get({plain:true}))

        res.render('homepage',
        {
          posts,
          logged_in:req.session.logged_in
        }
        );
    }catch (err) {
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

// potential route for comments
// router.get ('/post/:id', async (req,res) => {
//   try {
//     const commentData = await Post.findByPk(
//       req.params.id,
//     )
  

//     const posts = commentData.get({ plain: true});
//     console.log(posts)
//   //   console.log(posts)
//     res.render("single-post", {posts,
//                   user_id: req.session.user_id,

//     logged_in: true,
//   })
//   if (!commentData) {
//     res.status(404).json({message: "No post found with this id!"});
//     return

//   }
//     // res.json("ok")
//     // console.log(postData)

   
//   }catch(err) {
//     res.status(400).json(err)
//   }
// });

// potential route for comments
router.get ('/post/:id', async (req,res) => {
  try {
    const postData = await Post.findByPk(
      req.params.id,
      // {
      // include: [
      //   {
      //     model: User,
      //     attributes:["name"]
      //   },
      //          {
      //     model: Comments,
      //     attributes:["id", "comment_content", "post_id","user_id", "date_created"],
      //     include:{
      //       model:User,
      //       attributes:["name"]
      //     }
      //   }
      // ],
    // }
    )
    ;
  
    // res.json("ok")
    // console.log(postData)

    const posts = postData.get({ plaine:true});
    // console.log(posts)
  //   console.log(posts)
    res.render("single-post", {posts,
                  user_id: req.session.user_id,

    // logged_in: true,
  })
    if (!postData) {
      res.status(404).json({message: "No post found with this id!"});
      return

    }
  }catch(err) {
    res.status(400).json(err)
  }
});

module.exports = router

