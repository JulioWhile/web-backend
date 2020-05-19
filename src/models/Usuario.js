var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	nivel: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
