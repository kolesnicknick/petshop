const usersService = require('./user.service');
const accountService = require('../accounts/account.service');
const asyncHandler = require('../../common/helpers/async.handler');
const responseHandler = require('../../common/helpers/response.handler');

class UsersController {

    findMany = asyncHandler(async (req, res, next) => {
        const users = await usersService.findMany();
        responseHandler(res, users);
    });

    findOneById = asyncHandler(async (req, res, next) => {
        const user = await usersService.findOneById(req.params.id);
        responseHandler(res, user);
    });

    createOne = asyncHandler(async (req, res, next) => {
        //TODO move to transaction
        const user = await usersService.createOne(req.body);
        const account = await accountService.createOne({userId: user.id, userType: "default", balance: 1000});
        responseHandler(res, user);
    });

    findMe = asyncHandler(async (req, res, next) => {
        const id = req.user.id;
        console.log(req);
        const user = await usersService.findOneById(id);
        user.account = await accountService.findOneByUserId(id);
        responseHandler(res, user);
    });

    updateOne = asyncHandler(async (req, res, next) => {
        const user = await usersService.updateOne(req.body);
        responseHandler(res, user);
    });

    removeOne = asyncHandler(async (req, res, next) => {
        const result = await usersService.removeOne(req.params.id);
        responseHandler(res, result);
    });
}

const usersController = new UsersController();
module.exports = usersController;
