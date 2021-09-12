'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtotipoitem', { 
      produtotipoitem_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
     descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
     },
     created_at:{
        type: Sequelize.DATE,
        allowNull: false,
     },
     updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
     } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtotipoitem');
  }
};
