const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('in posts!');
});

router.get('/specific', (req,res) => {
    res.send('in sprecific posts! @posts/specific');
});

module.exports = router;