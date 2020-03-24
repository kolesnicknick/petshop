const usersService = require('./user.service');
const accountService = require('../accounts/account.service');
const {asyncHandler} = require('../../common/middlewares/async.handler');

class UsersController {

    findMany  = asyncHandler(async (req, res, next) => {
            const users = await usersService.findMany();
            res.json(users);
    });

     findOneById =  asyncHandler(async (req, res, next) => {
            const user = await usersService.findOneById(req.params.id);
            res.json(user);
    });

    createOne = asyncHandler(async (req, res, next) => {
            const user = await usersService.createOne(req.body);
            console.log({ userId: user.id, userType: "default", balance: 1000 });
            const account = await accountService.createOne({ userId: user.id, userType: "default", balance: 1000 });
            res.json(user);
    });

    findMe =  asyncHandler(async (req, res, next) =>{
            const id = req.user.id;
            console.log(req);
            const user = await usersService.findOneById(id);
            user.account = await accountService.findOneByUserId(id);
            res.json(user);
    });

    updateOne =  asyncHandler(async (req, res, next) => {
            const user = await usersService.updateOne(req.body);
            res.json(user);
    });

    removeOne = asyncHandler(async (req, res, next) => {
            const result = await usersService.removeOne(req.params.id);
            res.json(result);
    });
}

const usersController = new UsersController();
module.exports = usersController;
