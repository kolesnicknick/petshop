const productService = require('./product.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class ProductController {
    getCategories = asyncHandler(async (req, res, next) => {
        const categories = Array.from(new Set((await productService.getCategories()).map(i => i.species)));
        responseHandler(res, categories);
    });

    getProductsNotSold = asyncHandler(async (req, res, next) => {
        if (!req.query.limit) {
            req.query.limit = 10
        }
        if (!req.query.page) {
            req.query.page = 1
        }
        const products = (await productService.findMany(req.query));
        const pages = products.length / req.query.limit;
        responseHandler(res, products, {
            page: +req.query.page,
            totalPages: (await productService.count(req.query)).length / req.query.limit
        });
    });

    createOne = asyncHandler(async (req, res, next) => {
        const product = await productService.createOne(req.body, req.user);
        responseHandler(res, product);
    });

    getProductByID = asyncHandler(async (req, res, next) => {
        const products = await productService.findOneById(req.params.id);
        responseHandler(res, products);
    });
}

const productController = new ProductController();
module.exports = productController;
