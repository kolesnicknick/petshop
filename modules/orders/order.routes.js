const orderController = require('./order.controller');

const { Router } = require('express');

const router = new Router();

router.post('/one', auth, orderController.createOne);

router.post('/many', auth, orderController.createMany);

router.get('/history', orderController.getAll);

router.get('/history/me', auth, orderController.userOrders);

module.exports = router;
