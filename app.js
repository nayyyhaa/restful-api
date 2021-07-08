const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(cors());

//Import routes
const postRoutes = require('./routes/posts/post');
app.use('/posts', postRoutes);

//routes
app.get('/', (req,res) => {
    res.send('trial!');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true  }, () => console.log('connected to DB'))

//listen to server
app.listen(3000, (req,res) => {
    console.log('listening to localhost:3000/')
})