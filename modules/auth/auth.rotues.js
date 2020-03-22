const { LoginDto } = require('./auth.dtos');
const { Router } = require('express');
const authController = require('./auth.controller');
const usersController = require('../users/user.controller');
const createValidator = require('../../common/middlewares/create-validator');
const {CreateUserDto} = require("../users/user.dtos");

const router = new Router();

router.post('/login', createValidator(LoginDto), authController.login);
router.post('/register', createValidator(CreateUserDto), usersController.createOne);
router.post('/me', createValidator(CreateUserDto), usersController.createOne);

module.exports = router;
