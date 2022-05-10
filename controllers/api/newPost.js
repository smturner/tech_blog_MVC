const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth')


router.get('/', async (req, res) => {
    try{
        const newPost = await Post.findAll({
            include: [{
                model:User,
                attributes:['name']
            }]
        });
        const posts = newPost.map((post) => post.get({plain:true}))
        res.render('newPost', {
            posts,
            logged_in:req.session.logged_in
    });
}catch(err){
    res.status(500).json(err)
}
  })
  

router.get('/:id', async (req,res) => {
    try{
        const newPost = await Post.findOne(
          req.params.id,
        )
    if (!newPost) {
        res.status (404).json({message: "No post found with this id!"});
        return
    }
    res.status(200).json(newPost)
}catch (err) {
    res.status(400).json(err)
}
})

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
            req.body, {
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