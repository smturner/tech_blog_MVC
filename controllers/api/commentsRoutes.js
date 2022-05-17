const router = require('express').Router();
const { Comments, User } = require('../../models');
const withAuth = require("../../utils/auth")

// router.get('/', async (req, res) => {
//     try {
//       const commentData = await Comments.findAll({
          
//         include: [{ model: User,
//         attributes: ['name']
//     }],
        
//       });
//     //   console.log(commentData)
//       const posts = commentData.map((post) => post.get({ plain: true }));
//       console.log(posts)
//       res.render('single-post', {
//                     posts,
//                     logged_in: req.session.logged_in
//                     // user_id: req.session.user_id,
//                     // logged_in: true
//                 })
//       // res.status(200).json("ok");
//     }catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// router.get('/',  async (req, res) => {
//     // try {
//     //     const commentData = await Comments.findAll({
//     //         //   include: [
//     //         //     {
//     //         //         model: User,
//     //         //         attributes: ['name'],
//     //         //     },
//     //         // ],
//     //     });
//     //     const posts = commentData.get({ plain: true });
//         res.json("ok")
//         // console.log(posts)
//         // res.render('single-post', {
//         //     posts,
//         //     user_id: req.session.user_id,
//         //     logged_in: true
//         // })
//     // } catch (err) {
//     //     res.status(500).json(err);
//     // }
//   });

// router.get("/", (req, res) => {
//       Comments.findAll({
//           where
//           include: [
//               {
//                   model:User,
//                   attributes: ['name'],
//               }
//           ]
//       })
//       .then((commentData) => res.json(commentData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

router.post('/', withAuth, async (req, res) => {
    try{
        const commentData= await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.session.post_id
        });
        res.status(200).json(commentData)
    }catch(err) {
        res.status(400).json(err);
    }
});


module.exports=router;