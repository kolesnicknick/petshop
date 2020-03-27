const { DataTypes, Model } = require('sequelize');
const { UserModel } =  require('../users/user.model');
const sequelize = require('../../db');

class Account extends Model {}

const AccountModel = Account.init({
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
    userType: { type: DataTypes.ENUM, values: ["admin", "provider", "default"] },
    balance: {type: DataTypes.INTEGER, allowNull: false},
}, { sequelize, modelName: 'Account' });

console.log(sequelize.models);
module.exports = { AccountModel };

