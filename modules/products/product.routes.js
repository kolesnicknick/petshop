const productController = require('./product.controller');

const { Router } = require('express');

const router = new Router();

router.get('/', productController.getProducts);
router.post('/', productController.createOne);

router.get('/:id', productController.getProductByID);

module.exports = router;
