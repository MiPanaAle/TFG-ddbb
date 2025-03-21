const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController');

router.post('/', userController.createUsuario);
router.get('/', userController.getUsuarios);

module.exports = router;