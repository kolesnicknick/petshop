const { CreateProductDto } = require ("./product.dtos");
const createValidator = require('../../common/middlewares/create-validator');

const productController = require('./product.controller');

const { Router } = require('express');

const router = new Router();

router.get('/', productController.getProducts);
router.post('/', productController.createOne);
router.get('/:id', createValidator(CreateProductDto),  productController.getProductByID);

module.exports = router;
