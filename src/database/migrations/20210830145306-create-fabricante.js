'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fabricante', { 
      fabricante_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
     descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
     },
     ativo: {
        type: Sequelize.CHAR(1),
        allowNull: false,
     },
     cnpj: {
        type: Sequelize.STRING(14),
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
    await queryInterface.dropTable('fabricante');
  }
};
