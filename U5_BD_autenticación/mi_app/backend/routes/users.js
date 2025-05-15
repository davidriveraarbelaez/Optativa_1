const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevoUsuario = new User({ nombre, email });
    await nuevoUsuario.save();
    res.json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

module.exports = router;
