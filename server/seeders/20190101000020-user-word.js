'use strict';

let tableName = 'Word';

module.exports = {
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};