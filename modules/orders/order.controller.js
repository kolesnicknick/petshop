const orderService = require('./order.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');


class OrderController {
    history = asyncHandler(async (req, res, next) => {
        const orders = await orderService.orderHistory();

        responseHandler(res, orders);
    });

    createMany = asyncHandler(async (req, res, next) => {
        let products = req.body.products;
        let acceptedOrders =  await orderService.applyOrderOnMany(req.user.dataValues.id, products);
        responseHandler(res, acceptedOrders);
    });

    userOrders = asyncHandler(async (req, res, next) => {
        const orders = await orderService.myHistory();
        responseHandler(res, orders);
    });
}

const orderController = new OrderController();
module.exports = orderController;
