const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/gameController');

router.post('/', gameController.createPartida);
router.get('/', gameController.getPartidas);

module.exports = router;