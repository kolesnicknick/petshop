const { DataTypes, Model} = require('sequelize');
const sequelize = require('../../db');

class Order extends Model {
}

const OrderModel = Order.init({
    id: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
    productId: {type: DataTypes.UUID,  allowNull: false},
    buyerId: {type: DataTypes.UUID,  allowNull: false}
}, {sequelize, modelName: 'Order'});

module.exports = { ProductModel } ;
