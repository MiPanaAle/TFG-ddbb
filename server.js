const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuario.routes');
const partidaRoutes = require('./routes/partida.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/usuarios', userRoutes);
app.use('/api/partidas', gameRoutes);

// Sincronizar base de datos y arrancar servidor
sequelize.sync({ force: false })
	.then(() => {
		app.listen(3001, () => {
			console.log('Servidor corriendo en puerto 3001');
		});
	})
	.catch(error => {
		console.error('Error al sincronizar BD:', error);
	});