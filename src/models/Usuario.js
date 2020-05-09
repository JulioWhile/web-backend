var mongoose = require('mongoose');

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

mongoose.model('Usuario', UsuarioSchema);
