const router = require('express').Router();
const { User, Post } = require('../models');


// route that renders the homepage blogposts
// router.get('/', async (req, res) => {
//     try{
//         const dashboardData = await Post.findAll({
//           include: [
//             {
//               model: User,
//               attributes:['name'],
//             },
//           ],
           
//         });
//         const posts = dashboardData.map((post) => post.get({plain:true}))

//         res.render('homepage',
//         {
//           posts,
//           logged_in:req.session.logged_in
//         }
//         );
//         // res.status(200).json(dashboardData);
//     }catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/signup', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }
//     res.render('signup')
// })

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/dashboard');
//         return;
//     }
//     res.render('login')
// });

module.exports=router


// potential route for comments
// router.get ('post/:id', async (req,res) => {
//   try {
//     const postData = await Post.findByPk(
//       req.params.id,
//       {
//       include: [
//         User,
//         {
//           model: Comment,
//           include:[User],
//         },
//       ],
//     });
//     const posts = postData.map((post) => post.get({ plaine:true}));
//     res.render("single-post", {post})
//     if (!postData) {
//       res.status(404).json({message: "No post found with this id!"});
//       return

//     }
//   }catch(err) {
//     res.status(400).json(err)
//   }
// })