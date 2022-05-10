const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth')


router.get('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                  model: User,
                  attributes:['name'],
                },
              ],
        });
        const posts = newPost.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            posts,
            user_id: req.session.user_id,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/edit/:id', async (req, res) => {
    try{
        const editPost = await Post.findByPk (
            req.params.id
        )
        
        // const posts = editPost.map((post) => post.get({ plain: true }));
        console.log(editPost.get({plain: true}));
        // res.json('ok'); 
        res.render("editPost", {
            editPost,
            user_id: req.session.user_id,
            logged_in:true,
        })
        if (!editPost) {
            res.status (404).json({message: "No post found with this id!"});
            return
        }
        //res.status(200).json(editPost)
    }catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router