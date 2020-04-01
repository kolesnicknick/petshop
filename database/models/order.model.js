const {UserModel} = require("./user.model");
const {ProductModel} = require("./product.model");

const { DataTypes, Model} = require('sequelize');

const sequelize = require('../db');
const { v1: uuid } = require('uuid');

class Order extends Model {
}

const OrderModel = Order.init({
    id: {type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue:uuid()},
    sellerId: {type: DataTypes.UUID,  allowNull: false},
    productId: {type: DataTypes.UUID,  allowNull: false},
    buyerId: {type: DataTypes.UUID,  allowNull: false}
}, {sequelize, modelName: 'Order'});


ProductModel.hasOne(OrderModel, {foreignKey: 'productId', as: 'product'});
UserModel.hasMany(OrderModel, {foreignKey: 'sellerId', as: 'seller'});
UserModel.hasMany(OrderModel, {foreignKey: 'buyerId', as: 'buyer'});

OrderModel.belongsTo(ProductModel, {foreignKey: 'productId', as: 'product'});
OrderModel.belongsTo(UserModel,  {foreignKey: 'sellerId', as: 'seller'});
OrderModel.belongsTo(UserModel, {foreignKey: 'buyerId', as: 'buyer'});

module.exports = { OrderModel } ;
