var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	nivel: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
