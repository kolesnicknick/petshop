const orderService = require('./order.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class OrderController {
    getAll = asyncHandler(async (req, res, next) => {
        const orders = await orderService.findMany();

        responseHandler(res, orders);
    });

    createOne = asyncHandler(async (req, res, next) => {
        const order = await orderService.createOne(req.body);
        responseHandler(res, order);
    });

    createMany = asyncHandler(async (req, res, next) => {
        let products = req.body.products;
        let acceptedOrders = [];

        await orders.forEach(product => {orderService.createOne(product, req.user)});
        responseHandler(res, order);
    });

    userOrders = asyncHandler(async (req, res, next) => {
        const orders = await orderService.findMany({
            where: {buyerId : req.user.id}
        });
        responseHandler(res, orders);
    });
}

const orderController = new OrderController();
module.exports = orderController;
