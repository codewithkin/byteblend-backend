const Post = require("../models/Post");

//Getting all the posts from the databse
const getPosts = async(req, res) => {
    const posts  = await Post.find()
        .then (posts => res.json({ posts }))
};

//Getting a single post from the database using the id
const getPost = async(req, res) => {
    const { id } = req.body;
    const post = await Post.findById( id )
        .then(post => res.json({ fetched: post }))
};

//Creating a new post
const createPost = async(req, res) => {
    const { poster, contents, liked } = req.body;
    const postData = JSON.parse(JSON.stringify({ poster, contents, liked }));
    const post = await Post.create(postData)
        .then(post => res.json(post)) 
};

//Deleting a post, by the id
const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = Post.findByIdAndDelete( id );
};

module.exports = {
    getPost, getPosts, createPost, deletePost
}