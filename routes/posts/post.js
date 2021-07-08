const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

router.get('/', (req,res) => {
    res.send('in posts!');
});

router.get('/specific', (req,res) => {
    res.send('in sprecific posts! @posts/specific');
});

//use DB
router.post('/', (req, res) => {
    const post = new Post({ 
        title: req.body.title,
        description: req.body.description
    });
    post.save() //returns promise
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({message: err})
        })
    //console.log(req.body)
})

module.exports = router;