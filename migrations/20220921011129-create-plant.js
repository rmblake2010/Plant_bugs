'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plants', {
      plant_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scientific_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      common_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hardiness: {
        type: Sequelize.STRING,
        allowNull: false
      },
      max_height: {
        type: Sequelize.STRING,
        allowNull: false
      },
      max_width: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plants');
  }
};