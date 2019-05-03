'use strict';

let tableName = 'Word';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
    }).then(() => {
        queryInterface.addIndex(tableName, ['name', 'userId'])
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable(tableName);
  }
};