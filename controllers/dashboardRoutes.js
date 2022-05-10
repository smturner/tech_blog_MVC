const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth')

//renders users personal routes for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
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

//renders create new post page with form
router.get('/create', async (req, res) => {
    try {
        const newPost = await Post.findAll({
            include: [{
                model: User,
                attributes: ['name']
            }]
        });
        const posts = newPost.map((post) => post.get({ plain: true }))
        res.render('newPost', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

//route to show the single post to edit
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const editPost = await Post.findByPk(
            req.params.id
        )
        if (!editPost) {
            res.status(404).json({ message: "No post found with this id!" })
            return
        }

        const posts = editPost.get({ plain: true });
        // console.log(posts)
        res.render("editPost", {
            posts,
            // user_id: req.session.user_id,
            logged_in: true,
        })
        if (!editPost) {
            res.status(404).json({ message: "No post found with this id!" });
            return
        }
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router