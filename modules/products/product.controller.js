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
