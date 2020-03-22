const { AccountModel } = require('./account.model');
const {BadRequest, NotFound} = require('../../common/exceptions/exceptions');

class AccountService {

    async findMany() {
        return AccountModel.findAll();
    }

    async findOneByUserId(userID) {
        const account = await AccountModel.findOne({where: {userID}});

        if (!account) {
            throw new NotFound(`Account with userID ${userID} not found`);
        }

        return account;
    }

    async createOne({balance, userID, userType}) {
        return await AccountModel.create({
            balance,
            userID,
            userType,
        })
    }

    async updateOne(id, accountData) {
        await this.findOneById(id);
        await AccountModel.update(accountData, {where: {id}});
        return this.findOneById(id);
    }

    async removeOne(id) {
        const account = await this.findOneById(id);
        account.destroy();
        return {id: account.id};
    }
}

module.exports = new AccountService();
