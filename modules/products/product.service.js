const {ProductModel} = require('../../database/models/product.model');
const userService = require('../users/user.service');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const {v1: uuid} = require('uuid');
const queryMapper = require('./ProductsQueryMapper');

class ProductService {

    async findMany(query) {
        let params = queryMapper.startFrom(query).withPageAndLimit(query.page, query.limit).withIsSold(false).build();
        return ProductModel.findAll(params);
    }

    async count(query) {
        let params = queryMapper.startFrom(query).withIsSold(false).build();
        return ProductModel.findAll(params);
    }

    async getCategories() {
        return ProductModel.findAll({
            attributes: ['species'],
            distinct: true
        });
    }

    async findOneById(id, transaction) {
        const product = await ProductModel.findOne({where: {id}}, {transaction});

        if (!product) {
            throw new NotFound('Product not found');
        }

        return product;
    }

    async createOne({name, species, price, gender, weight, birth_date, color, breed, temper}, user) {
        const productModel = new ProductModel({
            id: uuid(),
            name,
            species,
            price,
            gender,
            weight,
            birth_date,
            color,
            breed,
            temper,
            UserId: user.id,
            isSold: false
        });
        return await productModel.save();
    }

    async updateOne(id, productData, transaction) {
        await this.findOneById(id);
        await ProductModel.update(productData, {where: {id}}, {transaction});
        return this.findOneById(id);
    }

    async removeOne(id) {
        const user = await this.findOneById(id);
        user.destroy();
        return {id: user.id};
    }
}

module.exports = new ProductService();
