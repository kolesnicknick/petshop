const { DataTypes, Model } = require('sequelize');
const { UserModel } =  require('../users/user.model');
const sequelize = require('../../db');

class Account extends Model {}

const AccountModel = Account.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement:true, },
    userType: { type: DataTypes.ENUM, values: ["admin", "provider", "default"] },
    balance: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type:DataTypes.INTEGER, allowNull:false, unique:true}
}, { sequelize, modelName: 'Account' });

console.log(sequelize.models);
module.exports = { AccountModel };

