const { DataTypes, Model} = require('sequelize');
const sequelize = require('../db');
const { v1: uuid } = require('uuid');

class Order extends Model {
}

const OrderModel = Order.init({
    id: {type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue:uuid()},
    productId: {type: DataTypes.UUID,  allowNull: false},
    buyerId: {type: DataTypes.UUID,  allowNull: false}
}, {sequelize, modelName: 'Order'});

module.exports = { OrderModel } ;
