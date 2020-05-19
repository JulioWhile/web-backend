const express = require('express');
const router = express.Router();
const Tienda = require('../models/Tienda');

// Obtener todas las tiendas
router.get('/tiendas', (req, res) => {
	Tienda.find().exec((err, tiendas) => {
		if (err) {
			return res.status(400).json({
				success: false,
				err,
			});
		}
		Tienda.countDocuments({ status: true }, (err, conteo) => {
			res.json({
				success: true,
				count: conteo,
				tiendas,
			});
		});
	});
});

// Agregar una Tienda
router.post('/tiendas', async (req, res) => {
    let {nombre, logo, ubicacion} = req.body
	const post = new Tienda({
		nombre,
		logo,
		ubicacion,
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
		const tienda = await Tienda.remove({ _id: req.params.id });
		res.json(tienda);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;