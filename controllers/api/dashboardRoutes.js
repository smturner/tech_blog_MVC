const router = require('express').Router();
const { Post } = require('../../models')

//new blog post route
router.post ('/', async (req, res) => {
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

router.put("/:id", async(req,res) => {
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






module.exports=router