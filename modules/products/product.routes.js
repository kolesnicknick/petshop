const { CreateProductDto } = require ("./product.dtos");
const createValidator = require('../../common/middlewares/create-validator');
const provider = require('../../common/middlewares/provider.middleware');
const auth = require('../../common/middlewares/auth.middleware');
const productController = require('./product.controller');

const { Router } = require('express');

const router = new Router();

router.get('/', productController.getProducts);
router.post('/', auth, createValidator(CreateProductDto), provider ,productController.createOne);
router.get('/:id',  productController.getProductByID);

module.exports = router;
