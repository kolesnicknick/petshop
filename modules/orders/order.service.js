
const {ProductModel} = require('../products/product.model');
const { OrderModel } = require('./order.model');

const userService = require('../users/user.service');
const productService = require('../products/product.service');
const accountService = require('../accounts/account.service');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const sequelize = require('../../db');

class OrderService {

    async applyOrdersOnMany(buyerId, products) {
        return sequelize.transaction(async transaction => {
            return await products.map(p => this.applyOrderOnSingle(buyerId, p.id, transaction));
        })
    }

    async applyOrderOnSingle(buyerId, productId, transaction) {
        let admin = (await userService.findOneByEmail('kolesniknikolai92@gmail.com')).dataValues;
        let user = (await userService.findOneById(buyerId, transaction)).dataValues;
        let product = (await productService.findOneById(productId, transaction)).dataValues;

        if (user.balance < product.price) {
            throw new BadRequest(`Not enough money on balance. Product costs: ${product.price}, but you have ${user.balance}`);
        }
        // take money from user
        await accountService.updateBalance(buyerId, -product.price, transaction);
        // add money to seller
        await accountService.updateBalance(product.UserId, product.price * 0.7, transaction);
        // add money to admin
        await accountService.updateBalance(admin.id, product.price * 0.3, transaction);
        // make pet sold
        await productService.updateOne(product.id, {isSold:true}, transaction);
        // create order instance
        return await OrderModel.create({productId, buyerId}, {transaction});
    }
}

let orderService = new OrderService();
module.exports = orderService;
