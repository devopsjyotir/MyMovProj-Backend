'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const users = [...Array(5)].map((_) => {
    return {
      first_name: falso.randFirstName(),
      last_name: falso.randLastName(),
      email: falso.randEmail(),
      created_at: new Date(),
      updated_at: new Date()
    }
  })
  await queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users')
  }
};
