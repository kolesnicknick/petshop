const { CreateUserDto, UpdateUserDto } = require('./user.dtos');
const { Router } = require('express');
const usersController = require('./users.controller');
const createValidator = require('../../common/middlewares/create-validator');

const router = new Router();

router.get('/', usersController.findMany);

router.get('/:id', usersController.findOneById);

router.post('/', createValidator(CreateUserDto), usersController.createOne);

router.put('/:id', createValidator(UpdateUserDto), usersController.updateOne);

router.delete('/:id', usersController.removeOne);

module.exports = router;
