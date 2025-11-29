const db = require('../config/db.js');

// Obtener todos los posts
const getAll = async () => {
        const [result] = await db.query('SELECT * FROM posts');
        return result;
};

// Obtener un post por ID
const getById = async (id) => {
        const [result] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
        if (result.length === 0) {
            const err = new Error('Post no encontrado');
            err.status = 404;
            throw err;
        }
        return result[0];
};

// Obtener posts asociados a un autor
const getPostsByAutorId = async (id) => {
        const [result] = await db.query('SELECT * FROM posts WHERE autor_id = ?', [id]);
        if (result.length === 0) {
            const err = new Error('Post no encontrado');
            err.status = 404;
            throw err;
        }
        return result[0];
};

// Crear un nuevo post
const create = async ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
        const [result] = await db.query(
            'INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?,?,?,?,?)',
            [titulo, descripcion, fecha_creacion, categoria, autor_id]
        );
        return { id: result.insertId, titulo, descripcion, fecha_creacion, categoria, autor_id };
};

// Actualizar un post
const updateById = async (id, { titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
        const [result] = await db.query(
            'UPDATE posts SET titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ? WHERE id = ?',
            [titulo, descripcion, fecha_creacion, categoria, autor_id, id]
        );
        if (result.affectedRows === 0) {
            const err = new Error('Post no encontrado para actualizar');
            err.status = 404;
            throw err;
        }
        return { id, titulo, descripcion, fecha_creacion, categoria, autor_id };
};

// Eliminar un post
const removeById = async (id) => {
        const [result] = await db.query('DELETE FROM posts WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            const err = new Error('Post no encontrado para eliminar');
            err.status = 404;
            throw err;
        }
        return { message: 'Post eliminado correctamente' };
};

module.exports = {
    getAll,
    getById,
    getPostsByAutorId,
    create,
    updateById,
    removeById
};
