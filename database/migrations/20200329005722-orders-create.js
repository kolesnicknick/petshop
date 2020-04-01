

'use strict';
const { v1: uuid } = require('uuid');

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Orders', {
            id: {type: Sequelize.UUID, primaryKey: true, allowNull: false, defaultValue:uuid()},
            sellerId: {type: Sequelize.UUID, allowNull:false, references: {
                    model: {
                        tableName: 'Users',
                    },
                    key: 'id'
                }},
            productId: {
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'Products',
                    },
                    key: 'id'
                },
                allowNull: false
            },
            buyerId: { type:Sequelize.UUID, allowNull:false, references: {
                    model: {
                        tableName: 'Users',
                    },
                    key: 'id'
                },},
            createdAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
            updatedAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Orders');
    }
};

