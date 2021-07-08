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
router.get('/:postId', getById, async (req,res) => {
   // console.log(req.params.postId); //anything after posts/ eg. posts/xyz ~> xyz
   try{
        // const postRes = await Post.findById(req.params.postId);
        // res.json({postRes});
        res.json(res.post);
   } catch(err) {
        res.json({message: err.message});
    }
})

router.get('/specific', (req,res) => {
    res.send('in sprecific posts! @posts/specific');
});

//DELETE SPECIFIC POST
router.delete('/:postId', getById, async (req,res) => {
    try {
        // const removedPost = await Post.remove({ _id: req.params.postId});
        // res.json(removedPost);
        await res.post.remove();
        res.json({message: "Deleted post"});
    } catch(err) {
        res.json({message: err.message});
    }
})

//UPDATE ONE POST 
router.patch('/:postId', getById, async (req,res) => {
    if(req.body.title != null) res.post.title = req.body.title;
    if(req.body.description != null) res.post.description = req.body.description;
    try{
        const updatedPost = await res.post.save();
        res.json(updatedPost);
    } catch (err) {
    res.json({ message: err.message })
  }
})

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

async function getById(req, res, next){
    let post;
    try{
        post = await Post.findById(req.params.postId);
        if(post == null) res.json({message: "No posts were found!"});
    } catch(err) {
        res.json({message: err.message});
    }
    res.post = post;
    next();
}

module.exports = router;