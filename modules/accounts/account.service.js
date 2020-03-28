const { AccountModel } = require('./account.model');
const {BadRequest, NotFound} = require('../../common/exceptions/facade');

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

    async createOne({balance, UserID, userType}) {
        return await AccountModel.create({
            balance,
            UserID,
            userType,
        })
    }

    async updateBalance(id, balanceDelta, transaction) {
        let account = await this.findOneByUserId(id);
        return await AccountModel.update({balance: account.balance+balanceDelta}, {where: {id: account.id}, transaction});
    }

    async removeOne(id) {
        const account = await this.findOneByUserId(id);
        account.destroy();
        return {id: account.id};
    }
}

module.exports = new AccountService();
