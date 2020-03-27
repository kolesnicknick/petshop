const orderController = require('./order.controller');

const { Router } = require('express');

const router = new Router();

router.post('/', auth, orderController.createMany);

router.get('/history', orderController.getAll);

router.get('/history/me', auth, orderController.userOrders);

module.exports = router;
