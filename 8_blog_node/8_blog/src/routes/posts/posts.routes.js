const router = require('express').Router();
const {getAllPosts,getPostById,getPostsByAutorIdController,createPost,updatePostById,removePostById,} = require('../../controllers/post.controller.js')

// Define your routes here

router.get('',getAllPosts);
router.get('/:id',getPostById);
router.get('/autor/:autorId',getPostsByAutorIdController);
router.put('/:id',updatePostById);
router.post('',createPost);
router.delete('/:id',removePostById);

module.exports = router;
