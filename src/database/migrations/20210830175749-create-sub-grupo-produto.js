'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subgrupoproduto', { 
      subgrupoprodutoid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
     descricaosubgrupoproduto: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
     },
     ativo: {
        type: Sequelize.CHAR(1),
     },
     pesavel: {
        type: Sequelize.CHAR(1),
     },
     vendedor_altera_preco: {
        type: Sequelize.STRING(1),
     },
     markup: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('subgrupoproduto');
  }
};
