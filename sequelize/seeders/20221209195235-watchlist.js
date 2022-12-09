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
  
        user_id: users[Math.floor(Math.random() * users.length)].id,
        movie_id: mov.id,
        user_rating: falso.randNumber(),
        watched_status: falso.randBoolean(),
        created_at: new Date(),
      updated_at: new Date()
      
    }))

    await queryInterface.bulkInsert('watchlists', watchlists)
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('watchlists')
  }
};
