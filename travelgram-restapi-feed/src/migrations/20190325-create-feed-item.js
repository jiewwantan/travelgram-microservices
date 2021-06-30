'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FeedItem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      destination: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      beenthere: {
        type: Sequelize.STRING,
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FeedItem');
  },
};
