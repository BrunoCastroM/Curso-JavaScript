"use strict";const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Maria',
          email: 'maria@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Roberto',
          email: 'roberto@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Geovana',
          email: 'geovana@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
