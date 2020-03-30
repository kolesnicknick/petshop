'use strict';
const { v1: uuid } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('Users', {
          id: { type: Sequelize.UUID, primaryKey: true, allowNull: false, defaultValue: uuid()},
          firstName: { type: Sequelize.STRING, allowNull: true },
          lastName: { type: Sequelize.STRING, allowNull: true },
          email: { type: Sequelize.STRING, unique: true },
          password: { type: Sequelize.STRING, validate: { min: 4 }},
          createdAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
          updatedAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');

  }
};
