const { ProductModel } = require('../../database/models/product.model');
const userService = require('../users/user.service');
const { BadRequest, NotFound } = require('../../common/exceptions/facade');

class ProductService {

    async findMany(params) {
        return ProductModel.findAll(params);
    }

    async getAmountOfProducts() {
        return ProductModel.count();
    }

    async findOneById(id, transaction) {
        const product = await ProductModel.findOne({ where: { id }}, { transaction } );

        if (!product) {
            throw new NotFound('User not found');
        }

        return product;
    }

    async createOne({ name, species, price, gender, weight, birth_date, color, breed, temper }) {
        let user = await userService.findOneByEmail('kolesniknikolai92@gmail.com');
        const productModel = new ProductModel({ name, species, price, gender, weight, birth_date, color, breed, temper, UserId:user.id, isSold: false});
        return await productModel.save();
    }

    async updateOne(id, productData, transaction) {
        await this.findOneById(id);
        await ProductModel.update(productData, { where: { id }}, {transaction} );
        return this.findOneById(id);
    }

    async removeOne(id) {
        const user = await this.findOneById(id);
        user.destroy();
        return { id: user.id };
    }
}

module.exports = new ProductService();
