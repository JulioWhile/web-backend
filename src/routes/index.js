const express = require('express');
const router = express.Router();
const Computadora = require('../models/Computadora');
const Tienda = require('../models/Tienda');
const Usuario = require('../models/Usuario');

/**
 *
 * =============================================
 * ================COMPUTADORAS=================
 * =============================================
 */

// Obtener todas las computadoras
router.get('/computadora', async (req, res) => {
	try {
		const producto = await Computadora.find();

		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Obtener una computadora en especifico
router.get('/computadora/:id', async (req, res) => {
	try {
		const producto = await Computadora.findById(req.params.id);
		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Quitar una computadora
router.delete('/computadora/:id', async (req, res) => {
	try {
		const producto = await Computadora.findByIdAndDelete(id);
		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Agregar una computadora
router.post('/computadora', async (req, res) => {
	const post = new Computadora({
		imagen: req.body.imagen,
		gabinete: req.body.gabinete,
		ram: req.body.ram,
		procesador: req.body.procesador,
		tarjetaMadre: req.body.tarjetaMadre,
		fuente: req.body.fuente,
		refrigeracion: req.body.refrigeracion,
		tarjetaVideo: req.body.tarjetaVideo,
		hdd: req.body.hdd,
		ssd: req.body.ssd,
		precio: req.body.precio,
	});
	try {
		const savedProduct = await post.save();
		res.json(savedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

// Editar una computadora
router.put('/computadora/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedProduct = await Computadora.update({ _id: id }, req.body);
		res.json(updatedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

/**
 *
 * =============================================
 * ==================TIENDAS====================
 * =============================================
 */

// Obtener todas las tiendas
router.get('/tiendas', async (req, res) => {
	try {
		const tiendas = await Tienda.find();
		res.json(tiendas);
	} catch (err) {
		res.json({ message: err });
	}
});

// Agregar una Tienda
router.post('/tiendas', async (req, res) => {
	const post = new Tienda({
		nombre: req.body.nombre,
		logo: req.body.logo,
		ubicacion: req.body.ubicacion,
	});
	try {
		const savedTienda = await post.save();
		res.json(savedTienda);
	} catch (err) {
		res.json({ message: err });
	}
});

// Actualizar una Tienda
router.put('/tiendas/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedTienda = await Tienda.update({ _id: id }, req.body);
		res.json(updatedTienda);
	} catch (err) {
		res.json({ message: err });
	}
});

// Obtener una Tienda en especifico
router.get('/tiendas/:id', async (req, res) => {
	try {
		const tienda = await Tienda.findById(req.params.id);
		res.json(tienda);
	} catch (err) {
		res.json({ message: err });
	}
});

// Quitar una tienda
router.delete('/tiendas/:id', async (req, res) => {
	try {
		const tienda = await Product.findByIdAndDelete(id);
		res.json(tienda);
	} catch (err) {
		res.json({ message: err });
	}
});

/**
 *
 * =============================================
 * =================USUARIOS====================
 * =============================================
 */

// Agregar un Usuario
router.post('/usuarios', async (req, res) => {
	const post = new Usuario({
		username: req.body.username,
		password: req.body.password,
		nivel: req.body.nivel,
	});
	try {
		const savedUsuario = await post.save();
		res.json(savedUsuario);
	} catch (err) {
		res.json({ message: err });
	}
});

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
	try {
		const usuarios = await Usuario.find();
		res.json(usuarios);
		
	} catch (err) {
		res.json({ message: err });
	}
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

// Quitar un usuario en especifico
router.delete('/usuarios/:id', async (req, res) => {
	try {
		const usuarios = await Usuai.findByIdAndDelete(id);
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
