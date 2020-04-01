const productService = require('./product.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class ProductController {
    getProducts = asyncHandler(async (req, res, next) => {
        const products = await productService.findMany(req.query);

        responseHandler(res, products, {page:+req.query.page,
            totalPages:Math.ceil(await productService.getAmountOfProducts()/req.query.limit)});
    });

    createOne = asyncHandler(async (req, res, next) => {
        const product = await productService.createOne(req.body);
        responseHandler(res, product);
    });

    getProductByID = asyncHandler(async (req, res, next) => {
        const products = await productService.findOneById(req.params.id);
        responseHandler(res, products);
    });
}

const productController = new ProductController();
module.exports = productController;
