'use strict';
const { v1: uuid } = require('uuid');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Accounts', {
            id: {type: Sequelize.UUID, primaryKey: true, allowNull: false, defaultValue: uuid()},
            userType: {type: Sequelize.ENUM, values: ["admin", "provider", "default"]},
            balance: {type: Sequelize.INTEGER, allowNull: false},
            UserId: {
                type: Sequelize.UUID,
                references:{
                    model: {
                        tableName: 'Users',
                    },
                    key: 'id',
                }
            },
            createdAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
            updatedAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
        });

    },

    down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('Accounts');
    }
};
