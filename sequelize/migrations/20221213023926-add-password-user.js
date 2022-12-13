'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'last_name', 'passwordDigest')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'passwordDigest', 'last_name')
  }
};
