const router = require('express').Router();
const { Post, User, Comments } = require('../models');
// const withAuth = require('../../utils/auth')


router.get('/', async(req,res)=> {
    try{
        const newPost = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ["id", "title", "post_content", "date_created"],
            include: [{
                model: Comment,
                attributes: ["id", "comment_content", "date_created", "post_id", "user_id",],
                include: {
                    model: User,
                    attributes: ["name"],
                },
            },
        {
            model: User,
            attributes: ["name"],
        },
    ],
        });
        const posts = newPost.map((post) => post.get({plain:true}))
        res.render ('/dashbaord', {
            post,
            logged_in: true

        });
    }catch (err) {
        res.sataus(500).json(err);
    }
})

//new blog post route
router.post('/', async (req, res) => {
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

router.put("/:id", async (req, res) => {
    try {
        const dashboardData = await Post.update(
            req.body, {
            where: {
                id: req.params.id,
            },
        }
        );
        res.status(200).json(dashboardData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
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






module.exports = router