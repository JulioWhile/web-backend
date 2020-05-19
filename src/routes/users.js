const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
	Usuario.find().exec((err, users) => {
		if (err) {
			return res.status(400).json({
				success: false,
				err,
			});
		}
		Usuario.countDocuments({ status: true }, (err, conteo) => {
			res.json({
				success: true,
				count: conteo,
				users,
			});
		});
	});
});

// Obtener un Usuario en especifico
router.get('/usuarios/:id', async (req, res) => {
	try {
		const usuario = await Usuario.findById(req.params.id);
		res.json(usuario);
	} catch (err) {
		res.json({ message: err });
	}
});

// Agregar un Usuario
router.post('/usuarios', async (req, res) => {
    let {name, email, nivel} = req.body
	const post = new Usuario({
		name,
		email,
		nivel,
	});
	console.log(post);
	try {
		const savedUsuario = await post.save();
		res.json(savedUsuario);
	} catch (err) {
		res.json({ message: err });
	}
});

// Quitar un usuario en especifico
router.delete('/usuarios/:id', async (req, res) => {
	try {
		const usuarios = await Usuario.remove({ _id: req.params.id });
		res.json(usuarios);
	} catch (err) {
		res.json({ message: err });
	}
});

// Actualizar un usuario
router.put('/usuarios/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedUsuario = await Usuario.update({ _id: id }, req.body);
		res.json(updatedUsuario);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;