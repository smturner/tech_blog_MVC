const router = require('express').Router();
const { Comments, User } = require('../../models');
const withAuth = require("../../utils/auth")


router.get('/', (req, res) => {
  // Access the Comment model and run .findAll() method to get all comments
  Comments.findAll()
    // return the data as JSON formatted
    .then(dbCommentData => res.json(dbCommentData))
    // if there is a server error, return that error
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


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