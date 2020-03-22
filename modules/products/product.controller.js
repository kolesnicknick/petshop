const productService = require('./product.service');
class ProductController {
    async getProducts(req, res, next){
        try {
            const products = await productService.findMany();
            res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async createOne(req, res, next){
        try {
            const product = await productService.createOne(req.body);
            res.json(product);
        } catch (e) {
            next(e);
        }
    }

    async getProductByID(req, res, next){
        try {
            const products = await productService.findOneById(req.params.id);
            res.json(products);
        } catch (e) {
            next(e);
        }
    }
}

const productController = new ProductController();
module.exports = productController;
