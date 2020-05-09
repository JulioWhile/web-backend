const express = require('express');
const router = express.Router();
const Product = require('../models/Producto');

// Obtener todos los productos
router.get('/product', async (req, res) => {
	try {
		const producto = await Product.find();
		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Obtener un producto especifico
router.get('/product/:id', async (req, res) => {
	try {
		const producto = await Product.findById(req.params.id);
		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Quitar un producto
router.delete('/product/:id', async (req, res) => {
	try {
		const producto = await Product.findByIdAndDelete(id);
		res.json(producto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Agregar un producto
router.post('/product/add', async (req, res) => {
	const post = new Product({
		name: req.body.name,
		description: req.body.description,
		quantity: req.body.quantity,
	});
	try {
		const savedProduct = await post.save();
		res.json(savedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
