const router = require('express').Router();
const {User, Post, Comments }= require("../models")

//renders home page to signup or login
// router.get('/', (req, res) => {
//   res.render('landingpage')
// });

// //renders login page
// router.get('/login', (req, res) => {
//   res.render('login')
// });

// //renders sign up page
// router.get('/signup', (req, res) => {
//   res.render('signup') 
// });

// //renders past workout page for member, only when signed in
// router.get('/past_workouts', async (req, res) => {
//   try {
//     const memberData = await Member.findByPk(req.session.member_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: PastWorkouts}],
//     });
//     const member = memberData.get({plain: true});
//     res.render('pastworkouts', member)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

// module.exports = router