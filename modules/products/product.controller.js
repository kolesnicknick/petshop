const productService = require('./product.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class ProductController {
    getCategories = asyncHandler(async (req, res, next) => {
        const categories = Array.from(new Set((await productService.getCategories()).map(i => i.species)));
        responseHandler(res, categories);
    });

    getProductsNotSold = asyncHandler(async (req, res, next) => {
        const products = (await productService.findMany(req.query));
        const productsFiltered = products.filter(product => (product.isSold == null || product.isSold === false));
        const limit = req.query.limit || 10;
        const pages = productsFiltered.length / limit;
        responseHandler(res, productsFiltered, {
            page: +req.query.page,
            totalPages: Math.ceil(pages)
        });
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
