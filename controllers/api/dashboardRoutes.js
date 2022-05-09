const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
// const withAuth = require('../../utils/auth')


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

//         res.render('homepage', {
//           posts,
//           logged_in:req.session.logged_in
//         });
//         // res.status(200).json(dashboardData);
//     }catch (err) {
//         res.status(500).json(err);
//     }

// });


//all plog post by user
// router.get('/', withAuth, (req, res) => {
//     try {
//         const dashboardData = await Post.findAll({
//             where: {
//                 user_id: req.session.user_id,
//             },
//             attributes: ["id", "title", "post_content", "date_created" ],
//             include: [ 
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//                 {
//                     model: Comments,
//                     attributes: ["id", "comment_content", "date_created", "post_id", "user_id"],
//                     include: {
//                         model: User,
//                         attributes: ["name"],
//                     }
//                 }
//             ],
//         });
//         const posts = dashbaordData.map((post))
//     }
// })
//new blog post route
router.post ('/',   async (req, res) => {
    try{
        const dashboardData = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(dashboardData)
    }catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id",  async(req,res) => {
    try{
        const dashboardData= await Post.update(
            req.body, {
                where: {
                    id:req.params.id,
                },
            }
        );
        res.status(200).json(dashboardData) 
    }catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req,res)=> {
    try{
        const dashboardData = await Post.destroy(
            {
                where: {
                    id:req.params.id,
                },
            }
        );
        if(!dashboardData) {
            res.status(404).json ({message: "No post found with this id"});
            return;
        }
        res.status(200).json(dashboardData)
    }catch(err) {
        res.status(500).json(err);
    }
});






module.exports=router