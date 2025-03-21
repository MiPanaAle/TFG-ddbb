const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_db', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
