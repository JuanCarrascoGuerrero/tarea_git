const router = require('express').Router();
const autoresRoute = require('./autores/autores.routes.js')
const postsRoute = require('./posts/posts.routes.js')

// Define your routes here

router.use('/autores', autoresRoute);
router.use('/posts',postsRoute);

module.exports = router;
