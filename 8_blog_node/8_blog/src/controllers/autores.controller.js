const {getAll,getById,create,update,removeById} = require("../models/autores.model.js");

// ---  Actualizar autor
const updateAutorById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  // Validación de datos
  if (!id || !data.nombre || !data.email || !data.imagen) {
    return res
      .status(400)
      .json({
        error: "Faltan datos: id, nombre, email e imagen son obligatorios",
      });
  }
  const response = await update(id, data);
  if (!response) {
    return res
      .status(404)
      .json({ error: "Autor no encontrado para actualizar" });
  }
  res.status(200).json(response);
};

// --- Eliminar autor
const removeAutorById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(400)
      .json({ error: "El ID es obligatorio para eliminar el autor" });
  }
  const response = await removeById(id);
  if (!response) {
    return res.status(404).json({ error: "Autor no encontrado para eliminar" });
  }
  res.status(200).json(response);
};

// ---  Actualizar autor
const getAllAutores = async (req, res) => {
  const response = await getAll();
  if (!response || response.length === 0) {
    return res.status(404).json({ error: "No hay autores disponibles" });
  }
  res.status(200).json(response);
};

const getAutorById = async (req, res) => {
    const response = await getById(req.params.id);
    if (!response) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.status(200).json(response);
};
const registerAutor = async (req, res) => {
    const data = req.body;
    if (!data.nombre || !data.email || !data.imagen) {
      return res
        .status(400)
        .json({
          error: "Faltan datos: nombre, email e imagen son obligatorios",
        });
    }
    const response = await create(data);
    res.status(201).json(response);
};

module.exports = {
  getAllAutores,
  getAutorById,
  registerAutor,
  updateAutorById,
  removeAutorById,
};
