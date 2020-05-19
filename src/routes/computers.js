const express = require('express');
const router = express.Router();
const Computadora = require('../models/Computadora');

// Obtener todas las computadoras
router.get('/computadora', (req, res) => {
	Computadora.find().exec((err, compus) => {
		if (err) {
			return res.status(400).json({
				success: false,
				err,
			});
		}
		Computadora.countDocuments({ status: true }, (err, conteo) => {
			res.json({
				success: true,
				count: conteo,
				compus,
			});
		});
	});
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

// Agregar una computadora
router.post('/computadora', async (req, res) => {
	let {
		imagen, 
		gabinete, 
		ram, 
		procesador,
		tarjetaMadre, 
		fuente, 
		refrigeracion,
		tarjetaVideo, 
		hdd, 
		ssd, 
		precio,
		descontinuado
	} = req.body
	const post = new Computadora({
		imagen,
		gabinete,
		ram,
		procesador,
		tarjetaMadre,
		fuente,
		refrigeracion,
		tarjetaVideo,
		hdd,
		ssd,
		precio,
		descontinuado
	});
	try {
		const savedProduct = await post.save();
		res.json(savedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

// Quitar una computadora
router.delete('/computadora/:id', async (req, res) => {
	try {
		const computadora = await Computadora.remove({ _id: req.params.id });
		res.json(computadora);
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


module.exports = router;
