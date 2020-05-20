const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());

// Conectar a bd
mongoose
	.connect('mongodb+srv://root:123Qwe@testingback-jn5vp.mongodb.net/test', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log('Base de datos conectada'))
	.catch((err) => console.log(err));

// Importar Rutas
const computersRoutes = require('./routes/computers');
const storesRoutes = require('./routes/stores');
const usersRoutes = require('./routes/users');

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', computersRoutes);
app.use('/', storesRoutes);
app.use('/', usersRoutes);

// Iniciar Servidor
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});
