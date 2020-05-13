const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Producto
const ComputadoraSchema = new Schema({
	imagen: {
		type: String,
		required: true,
	},
	gabinete: {
		type: String,
		required: true,
	},
	ram: {
		type: String,
		required: true,
	},
	procesador: {
		type: String,
		required: true,
	},
	tarjetaMadre: {
		type: String,
		required: true,
	},
	fuente: {
		type: String,
		required: true,
	},
	refrigeracion: {
		type: String,
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	tarjetaVideo: {
		type: String,
		required: false,
	},
	hdd: {
		type: String,
		required: false,
	},
	ssd: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('Computadora', ComputadoraSchema);
