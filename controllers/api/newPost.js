const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth')




//new blog post route
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put("/:id", withAuth,  async (req, res) => {
    try {
        const dashboardData = await Post.update(
            {
            title: req.body.title,
            post_content:req.body.post_content,
            },
            {
            where: {
                id: req.params.id,
            },
        }
        );
        if (!dashboardData) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }
        res.status(200).json(dashboardData)
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth,  async (req, res) => {
    try {
        const dashboardData = await Post.destroy(
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!dashboardData) {
            res.status(404).json({ message: "No post found with this id" });
            return;
        }
        res.status(200).json(dashboardData)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports= router