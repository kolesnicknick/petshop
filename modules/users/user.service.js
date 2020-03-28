const bcrypt = require('bcrypt');
const {UserModel} = require('./user.model');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');

class UsersService {

    async findMany() {
        return UserModel.findAll();
    }

    async findOneById(id, transaction) {
        const user = await UserModel.findOne({where: {id}}, transaction);

        if (!user) {
            throw new NotFound('User not found');
        }

        return user;
    }

    async findOneByEmail(email) {
        const user = await UserModel.findOne({where: {email}});

        if (!user) {
            throw new NotFound('User not found');
        }

        return user;
    }

    async createOne(userData) {

        return sequelize.transaction(async transaction => {
            //create user

            //create account with link to user
        });
        const existingUser = await UserModel.findOne({
            where: {email: userData.email}
        });

        if (existingUser) {
            throw new BadRequest('User with provided email already exists');
        }

        const userModel = new UserModel(userData);
        userModel.password = await bcrypt.hash(userData.password, 10);
        const savedUser = await userModel.save();
        return savedUser;
    }

    async updateOne(id, userData) {
        await this.findOneById(id);
        await UserModel.update(userData, {where: {id}});
        return this.findOneById(id);
    }

    async removeOne(id) {
        const user = await this.findOneById(id);
        user.destroy();
        return {id: user.id};
    }
}

const userService = new UsersService();
module.exports = userService;
