const productController = require('./product.controller');

const { Router } = require('express');

const router = new Router();

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductByID);

module.exports = router;
