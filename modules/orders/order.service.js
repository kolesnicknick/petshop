const {Op} = require("sequelize");
const {ProductModel} = require('../../database/models/product.model');
const {UserModel} = require('../../database/models/user.model');
const {OrderModel} = require('../../database/models/order.model');
const _ = require('lodash');
const { v1: uuid } = require('uuid');


const userService = require('../users/user.service');
const productService = require('../products/product.service');
const accountService = require('../accounts/account.service');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const sequelize = require('../../database/db');

class OrderService {
    async applyOrderOnMany(buyerId, products) {
        return sequelize.transaction(async transaction => {
            let admin = (await userService.findOneByEmail('kolesniknikolai92@gmail.com')).dataValues;
            let buyer = (await userService.findOneById(buyerId, transaction)).dataValues;
            let buyerAccount = (await accountService.findOneByUserId(buyer.id, transaction)).dataValues;
            let productItems = (await Promise.all(products
                .map(product => productService.findOneById(product.id, transaction))))
                .map(p => p.dataValues);

            if (_.difference(products.map(i => i.id), productItems.map(i => i.id)).length > 0) {
                throw new BadRequest(`Products are not found: ${_.difference(products, productItems.map(i => i.id))}`);
            }

            if (buyerAccount.balance < _.sum(productItems.map(i => i.price))) {
                throw new BadRequest(`Not enough money on balance. Product costs: ${_.sum(productItems.map(i => i.price))}, but you have ${buyerAccount.balance}`);
            }

            if (productItems.filter(i => i.isSold).length > 0) {
                throw new BadRequest(`Products are already sold: ${productItems.filter(i => i.isSold)}`);
            }
            productItems = await Promise.all(productItems.map(async product => {
                await accountService.updateBalance(buyerId, -product.price, transaction);
                // add money to seller
                await accountService.updateBalance(product.UserId, product.price * 0.7, transaction);
                // add money to admin
                await accountService.updateBalance(admin.id, product.price * 0.3, transaction);
                // make pet sold
                await productService.updateOne(product.id, {isSold: true}, transaction);
                // create order instance
                return OrderModel.create({id: uuid(), sellerId: product.UserId, productId : product.id, buyerId}, {transaction});
            }));
            return productItems;
        });
    }

    async orderHistory(){
        return OrderModel.findAll({
            include: [
                { model: UserModel, as: 'buyer', attributes: ['firstName'] },
                { model: UserModel, as: 'seller', attributes: ['firstName'] },
                { model: ProductModel, as: 'product', attributes: ['price'] }]
        });
    }

    async myHistory(){

    }
}


module.exports = new OrderService();
