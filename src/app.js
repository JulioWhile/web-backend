const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Conectar a bd
mongoose
	.connect('mongodb+srv://admin:123Qwe@productsctr-8g4y4.mongodb.net/test', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log('Base de datos conectada'))
	.catch((err) => console.log(err));

// Importar Rutas
const indexRoutes = require('./routes/index');

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', indexRoutes);

// Iniciar Servidor
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});
