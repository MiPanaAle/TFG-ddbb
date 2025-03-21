const Partida = require('../models/gameModel');
const Usuario = require('../models/userModel');

exports.createPartida = async (req, res) => {
  try {
    const nuevaPartida = await Partida.create(req.body);
    res.status(201).json(nuevaPartida);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPartidas = async (req, res) => {
  try {
    const partidas = await Partida.findAll({
      include: [Usuario]
    });
    res.json(partidas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};