const { LoginDto } = require('./auth.dtos');
const { Router } = require('express');
const authController = require('./auth.controller');
const usersController = require('../users/user.controller');
const createValidator = require('../../common/middlewares/create-validator');
const {CreateUserDto} = require("../users/user.dtos");
const auth = require('../../common/middlewares/auth.middleware');

const router = new Router();

router.post('/login', authController.login);
router.post('/register', createValidator(CreateUserDto), usersController.createOne);
router.get('/me', auth, usersController.findMe);

module.exports = router;
