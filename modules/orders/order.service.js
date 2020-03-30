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
                return OrderModel.create({id: uuid(), productId : product.id, buyerId}, {transaction});
            }));
            return productItems;
        });
    }

    async orderHistory(){
        let toReturn = {};

        // Get orders (json)
        let orders = await OrderModel.findAll({attributes: ['productId', 'buyerId']});
        console.log(orders);
        // Get Products (json)
        let products = (await ProductModel.findAll({
            where: { id: { [Op.in]: orders.map(i => i.productId) } },
            attributes:['UserId', 'species', 'breed', 'price']
        })).dataValues;
        console.log(products);

        // Get sellers: Name + Last name
        let sellers = (await UserModel.findAll({
            where: { id: { [Op.in]: orders.map(i => i.productId) } },
            attributes:['id', 'firstName', 'lastName', 'email']
        })).dataValues;

        console.log(sellers);

        // Get buyers: Name + Last name
        let buyers = (await UserModel.findAll({
            where: { id: { [Op.in]: orders.map(i => orders.buyerId) } },
            attributes:['id', 'firstName', 'lastName', 'email']
        })).dataValues;
        console.log(buyers);

        //TODO: finish
        // Create full JSON
        return toReturn;
    }

    async myHistory(){

    }
}


module.exports = new OrderService();
