const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Tienda
const TiendaSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	ubicacion: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Tienda', TiendaSchema);
