const {ProductModel} = require('./product.model');
const userService = require('../users/user.service');
const productService = require('../products/product.service');
const accountService = require('../accounts/account.service');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const sequelize = require('../../db');

class OrderService {

    async applyOrdersOnMany(buyerId, products) {
        let admin = await userService.findOneByEmail('kolesniknikolai92@gmail.com');
        const productModel = new ProductModel({

        });
        return await productModel.save();
    }

    async applyOrderOnSingle(buyerId, productId){
        return sequelize.transaction( async transaction =>{
            let admin = await userService.findOneByEmail('kolesniknikolai92@gmail.com');
            let user = await userService.findOneById(buyerId, transaction);
            let product = await productService.findOneById(productId, transaction);

            if(user.balance < product.price ){
                throw new BadRequest(`Not enough money on balance. Product costs: ${product.price}, but you have ${user.balance}`);
            }

            // take money from user
            await accountService.updateBalance(buyerId, -product.price, transaction);
            // add money to seller
            await accountService.updateBalance(product.UserId, product.price*0.7, transaction);
            // add money to admin
            await accountService.updateBalance(admin.id, product.price*0.3, transaction)
            // make pet sold
            // create order instance
        });
    }
}

module.exports = orderService = new OrderService();
