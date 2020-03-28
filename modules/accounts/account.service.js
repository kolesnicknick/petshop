const { AccountModel } = require('./account.model');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');
const { v4: uuid } = require('uuid');

class AccountService {

    async findMany() {
        return AccountModel.findAll();
    }

    async findOneByUserId(UserId) {
        const account = await AccountModel.findOne({where: {UserId}});

        if (!account) {
            throw new NotFound(`Account with userID ${UserId} not found`);
        }

        return account;
    }

    async createOne({id, balance, UserId, userType}, transaction) {
        const acc = await AccountModel.create({
            id: uuid(),
            balance: balance,
            UserId: UserId,
            userType: userType
        }, {transaction});
        return acc;
    }

    async updateBalance(id, balanceDelta, transaction) {
        let account = await this.findOneByUserId(id);
        return await AccountModel.update({ balance: account.balance+balanceDelta }, {where: {id: account.id}}, { transaction });
    }

    async removeOne(id) {
        const account = await this.findOneByUserId(id);
        account.destroy();
        return {id: account.id};
    }
}

module.exports = new AccountService();
