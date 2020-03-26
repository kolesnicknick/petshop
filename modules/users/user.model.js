const { DataTypes, Model } = require('sequelize');
const { AccountModel } = require('../accounts/account.model');
const { ProductModel } = require('../products/product.model');

const sequelize = require('../../db');

class User extends Model {
    isProvider(){return true;} //TODO
    isAdmin(){return true;} //TODO
}

const UserModel = User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, validate: { min: 4 }},
}, { sequelize,
    modelName: 'User'});


console.log(sequelize.models);
UserModel.hasOne(AccountModel, {as: 'Account', foreignKey: 'userId'});
UserModel.hasMany(ProductModel, {as: 'Products', foreignKey: 'userId'});
ProductModel.belongsTo(UserModel,{as: 'User', foreignKey: 'userId', defaultValue: 1});

module.exports = { UserModel };
