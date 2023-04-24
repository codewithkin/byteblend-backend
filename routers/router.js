const express =  require('express');
const router = express.Router();
const { 
    getPosts,
    getPost,
    createPost,
    deletePost
  } = require('../controllers/appController');
const { createUser, deleteUser, getUser, updateUserPassword } = require('../controllers/usercontroller');

//Retrieving all posts from the database
router.get('/',  getPosts);

//Retrieving a single post from the database
router.get(':id', getPost);
router.post('users/new/', createUser);
router.delete('users/delete/:id', deleteUser);
router.patch('users/update/', updateUserPassword);
router.get('users/get/:email', getUser);

//Creating a new post
router.post('new/post/', createPost);

//Deleting a post
router.delete('posts/delete/:id', deletePost);

module.exports = router;