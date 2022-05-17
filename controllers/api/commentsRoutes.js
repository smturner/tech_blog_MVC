const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require("../../utils/auth")


router.get('/', (req, res) => {
  Comments.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




router.post('/', withAuth, async (req, res) => {
    try{
        const commentData= await Comments.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
        res.status(200).json(commentData)
    }catch(err) {
        res.status(400).json(err);
    }
});


module.exports=router;