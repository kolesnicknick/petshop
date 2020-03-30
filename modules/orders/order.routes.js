const orderController = require('./order.controller');
const auth = require('../../common/middlewares/auth.middleware');

const { Router } = require('express');

const router = new Router();

router.post('/', auth, orderController.createMany);

router.get('/history', orderController.history);

router.get('/history/me', auth, orderController.userOrders);

module.exports = router;
