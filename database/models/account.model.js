const { DataTypes, Model } = require('sequelize');
const { UserModel } =  require('./user.model');
const sequelize = require('../db');
const { v1: uuid } = require('uuid');


class Account extends Model {}

const AccountModel = Account.init({
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: uuid()},
    userType: { type: DataTypes.ENUM, values: ["admin", "provider", "default"] },
    balance: {type: DataTypes.INTEGER, allowNull: false},
}, { sequelize, modelName: 'Account' });

UserModel.hasOne(AccountModel, {foreignKey: 'UserId', as: 'account'});
AccountModel.belongsTo(UserModel, {foreignKey: 'UserId', as: 'account'});


module.exports = { AccountModel };

