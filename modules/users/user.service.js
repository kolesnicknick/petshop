const bcrypt = require('bcrypt');
const {UserModel} = require('./user.model');
const accountService = require('../accounts/account.service');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const sequelize = require('../../db');
const { v4: uuid } = require('uuid');

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
            const userId = uuid();
            console.log('Looking for user');
            const existingUser = await UserModel.findOne({
                where: {email: userData.email}
            });
            if (existingUser) {
                throw new BadRequest('User with provided email already exists');
            }
            console.log('User not found - GOOD');
            userData.id = userId;
            userData.password = await bcrypt.hash(userData.password, 10);
            console.log(`Creating user with data: ${userData.toString()}`);
            const userModel = await UserModel.create(userData, {transaction});
            console.log(`user created, model is: ${userModel.toString()}`);

            //create account with link to user
            console.log(`Creating account for user with data: `+userModel.dataValues.id);
            const account = await accountService.createOne({id:userId, UserId: userModel.dataValues.id, userType: "default", balance: 1000}, transaction);

            userModel.account = account;
            return userModel;
        });


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
