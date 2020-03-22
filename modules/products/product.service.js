const { ProductModel } = require('./product.model');
const { BadRequest, NotFound } = require('../../common/exceptions/facade');

class ProductService {

    async findMany() {
        return ProductModel.findAll();
    }

    async findOneById(id) {
        const product = await ProductModel.findOne({ where: { id } });

        if (!product) {
            throw new NotFound('User not found');
        }

        return product;
    }

    async findOneByEmail(id) {
        const user = await ProductModel.findOne({ where: { id } });

        if (!user) {
            throw new NotFound('User not found');
        }

        return user;
    }

    async createOne(productData) {
        const productModel = new ProductModel(productData);
        return await productModel.save();
    }

    async updateOne(id, productData) {
        await this.findOneById(id);
        await ProductModel.update(productData, { where: { id } });
        return this.findOneById(id);
    }

    async removeOne(id) {
        const user = await this.findOneById(id);
        user.destroy();
        return { id: user.id };
    }
}

module.exports = new ProductService();
