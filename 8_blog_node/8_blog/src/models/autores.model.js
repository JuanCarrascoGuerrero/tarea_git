
const db = require('../config/db.js');

const getAll = async () => {
        const [result] = await db.query('SELECT * FROM autores');
        return result;
};

const getById = async (id) => {
        const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [id]);
        if (result.length === 0) {
            const err = new Error('Autor no encontrado');
            err.status = 404;
            throw err;
        }
        return result[0];
};

const create = async ({ nombre, email, imagen }) => {
        const [result] = await db.query(
            'INSERT INTO autores (nombre,email,imagen) VALUES (?,?,?)',
            [nombre, email, imagen]
        );
        return { id: result.insertId, nombre, email, imagen };
};

const update = async (id, { nombre, email, imagen }) => {
        const [result] = await db.query(
            'UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?',
            [nombre, email, imagen, id]
        );
        if (result.affectedRows === 0) {
            const err = new Error('Autor no encontrado para actualizar');
            err.status = 404;
            throw err;
        }
        return { id, nombre, email, imagen };
};


const removeById = async (id) => {
        const [result] = await db.query('DELETE FROM autores WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            const err = new Error('Autor no encontrado para eliminar');
            err.status = 404;
            throw err;
        }
        return { message: 'Autor eliminado correctamente' };
};


module.exports = {
    getAll,
    getById,
    create,
    update,
    removeById
};
