'use strict';
const { User, Movie } = require('../models')
const falso = require('@ngneat/falso');
const { MEDIUMINT } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await User.findAll({ raw: true})
    const movies = await Movie.findAll({raw: true})
    const watchlists = movies.map((mov) => ({
  
        userId: users[Math.floor(Math.random() * users.length)].id,
        movieId: mov.id,
        userRating: falso.randNumber(),
        createdAt: new Date(),
      updatedAt: new Date()
      
    }))

    await queryInterface.bulkInsert('watchlists', watchlists)
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('watchlists')
  }
};
