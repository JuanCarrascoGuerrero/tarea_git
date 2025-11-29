const router = require('express').Router();
const {getAllAutores,getAutorById,registerAutor,updateAutorById,removeAutorById} = require('../../controllers/autores.controller.js')

// Define your routes here

router.get('',getAllAutores);
router.get('/:id',getAutorById);
router.put('/:id',updateAutorById);
router.post('',registerAutor);
router.delete('/:id',removeAutorById);

module.exports = router;
