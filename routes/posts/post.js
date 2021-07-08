const express = require('express');
const router = express.Router();
const Post = require('../../models/Post'); //use model anytime to submit data, get data

//GETS ALL THE POSTS
router.get('/', async (req,res) => {
    try { 
        const posts = await Post.find(); //method in mongoose
        res.send(posts);
    } catch(err) {
        res.json({message: err.message});
    }
});

//GET SPECIFIC POST
router.get('/:postId', async (req,res) => {
   // console.log(req.params.postId); //anything after posts/ eg. posts/xyz ~> xyz
   try{
        const postRes = await Post.findById(req.params.postId);
        res.json({postRes});
   } catch(err) {
        res.json({message: err.message});
    }
})

router.get('/specific', (req,res) => {
    res.send('in sprecific posts! @posts/specific');
});

//SUBMITS ALL THE POSTS
router.post('/', async (req, res) => {
    const post = new Post({ 
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save() //returns promise
        res.json({savedPost})
        //console.log(req.body)
    } catch(err) {
        res.json({message: err.message});
    }
})

module.exports = router;