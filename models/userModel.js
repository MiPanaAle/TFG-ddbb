const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  registro: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  alias: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "El alias es obligatorio",
        when: function (usuario) { return usuario.registro === true }
      }
    }
  },
  contrasenya: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "La contraseña es obligatoria",
        when: function (usuario) { return usuario.registro === true }
      }
    }
  },
  permisos: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Usuario;