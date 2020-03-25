const productService = require('./product.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class ProductController {
    getProducts = asyncHandler(async (req, res, next) => {
        const query = req.query;
        let limit = query.limit ? query.limit : 25;
        let page = query.page ? query.page : 1;
        console.log(query);
        let order = [];
        if(query.sort){
            query.sort.includes('age:ASC') ? order.push([['birth_date', 'ASC']]) : order.push(['birth_date', 'DESC']);
            query.sort.includes('price:DESC') ? order.push([['price', 'DESC']]) : order.push(['price', 'ASC']);
        }

        const products = await productService.findMany({
            offset: (page-1)*limit,
            limit: limit,
            order
        });

        responseHandler(res, products, {page:+page});
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
