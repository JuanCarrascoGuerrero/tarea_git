

const { getAll, getById, getPostsByAutorId, create, updateById, removeById } = require("../models/posts.model.js");

// --- Obtener todos los posts
const getAllPosts = async (req, res) => {
  const response = await getAll();
  if (!response || response.length === 0) {
    return res.status(404).json({ error: "No hay posts disponibles" });
  }
  res.status(200).json(response);
};

// --- Obtener post por ID
const getPostById = async (req, res) => {
  const response = await getById(req.params.id);
  if (!response) {
    return res.status(404).json({ error: "Post no encontrado" });
  }
  res.status(200).json(response);
};

// --- Obtener post por ID
const getPostsByAutorIdController = async (req, res) => {
  const response = await getPostsByAutorId(req.params.autorId);
  if (!response) {
    return res.status(404).json({ error: "Post no encontrado" });
  }
  res.status(200).json(response);
};

// --- Crear post
const createPost = async (req, res) => {
  const data = req.body;
  if (
    !data.titulo ||
    !data.descripcion ||
    !data.fecha_creacion ||
    !data.categoria ||
    !data.autor_id
  ) {
    return res.status(400).json({
      error:
        "Faltan datos: titulo, descripcion, fecha_creacion, categoria y autor_id son obligatorios",
    });
  }
  const response = await create(data);
  res.status(201).json(response);
};

// --- Actualizar post
const updatePostById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (
    !id ||
    !data.titulo ||
    !data.descripcion ||
    !data.fecha_creacion ||
    !data.categoria ||
    !data.autor_id
  ) {
    return res.status(400).json({
      error:
        "Faltan datos: id, titulo, descripcion, fecha_creacion, categoria y autor_id son obligatorios",
    });
  }
  const response = await updateById(id, data);
  if (!response) {
    return res.status(404).json({ error: "Post no encontrado para actualizar" });
  }
  res.status(200).json(response);
};

// --- Eliminar post
const removePostById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(400)
      .json({ error: "El ID es obligatorio para eliminar el post" });
  }
  const response = await removeById(id);
  if (!response) {
    return res.status(404).json({ error: "Post no encontrado para eliminar" });
  }
  res.status(200).json(response);
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAutorIdController,
  createPost,
  updatePostById,
  removePostById,
};

