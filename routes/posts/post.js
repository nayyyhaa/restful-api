const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

router.get('/', async (req,res) => {
    try { 
        const posts = await Post.find(); //method in mongoose
        res.send(posts);
    } catch(err) {
        res.json({message: err});
    }
});

router.get('/specific', (req,res) => {
    res.send('in sprecific posts! @posts/specific');
});

//use DB
router.post('/', async (req, res) => {
    const post = new Post({ 
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save() //returns promise
        res.json(savedPost)
        //console.log(req.body)
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;