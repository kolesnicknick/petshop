const { DataTypes, Model } = require('sequelize');
const { AccountModel } = require('../accounts/account.model');
const { ProductModel } = require('../products/product.model');
const { v4: uuid } = require('uuid');

const sequelize = require('../../db');

class User extends Model {
    // isProvider(){return true;} //TODO
    // isAdmin(){return true;} //TODO
}

const UserModel = User.init({
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: uuid()},
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, validate: { min: 4 }},
}, { sequelize,
    modelName: 'User'});


console.log(sequelize.models);
UserModel.hasOne(AccountModel);
UserModel.hasMany(ProductModel);
ProductModel.belongsTo(UserModel);

module.exports = { UserModel };
