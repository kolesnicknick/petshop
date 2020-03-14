const usersService = require('./users.service');

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

    async createOne(req, res, next) {
        try {
            const user = await usersService.createOne(req.body);
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
