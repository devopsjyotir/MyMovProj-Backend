'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const movies = [...Array(5)].map((_) => {
      return {
       title: falso.randMovie(),
       year: falso.randNumber({charCount: 4}),
        image: falso.randImg(),
        genre: falso.randUserName(),
        description: falso.randText({charCount: 70}),
        rating: falso.randNumber({charCount: 1}),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('movies', movies)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies')
  }
};
