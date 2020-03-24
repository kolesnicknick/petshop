const productService = require('./product.service');
const {asyncHandler} = require('../../common/middlewares/async.handler');

class ProductController {
     getProducts = asyncHandler(async (req, res, next) =>{
            const products = await productService.findMany();
            res.json(products);
    });

    createOne = asyncHandler(async (req, res, next) =>{
            const product = await productService.createOne(req.body);
            res.json(product);
    });

  getProductByID = asyncHandler(async (req, res, next) =>{

            const products = await productService.findOneById(req.params.id);
            res.json(products);
    });
}

const productController = new ProductController();
module.exports = productController;
