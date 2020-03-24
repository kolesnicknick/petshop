const usersService = require('./user.service');
const accountService = require('../accounts/account.service');

class UsersController {

    async findMany(req, res, next) {
        try {
            const users = await usersService.findMany();
            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async findOneById(req, res, next) {
        try {
            const user = await usersService.findOneById(req.params.id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async createOne(req, res, next) {      console.log('=================================================================================');
        console.log('=================================================================================');
        console.log('=================================================================================');
        console.log('=================================================================================');
        try {
            const user = await usersService.createOne(req.body);
            console.log('=================================================================================');
            console.log('=================================================================================');
            console.log('=================================================================================');
            console.log('=================================================================================');
            console.log({ userId: user.id, userType: "default", balance: 1000 });
            const account = await accountService.createOne({ userId: user.id, userType: "default", balance: 1000 });
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async findMe(req, res, next){
        console.log('Looking for me?');
        try {
            const id = req.user.id;
            console.log(req);
            const user = await usersService.findOneById(id);
            user.account = await accountService.findOneByUserId(id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async updateOne(req, res, next) {
        try {
            const user = await usersService.updateOne(req.body);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async removeOne(req, res, next) {
        try {
            const result = await usersService.removeOne(req.params.id);
            res.json(result);
        } catch (e) {
            next(e);
        }
    }
}

const usersController = new UsersController();
module.exports = usersController;
