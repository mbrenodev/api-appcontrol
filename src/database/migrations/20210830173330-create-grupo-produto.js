'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('grupoproduto', { 
      grupo_produto_id: {
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
     margemminima: {
        type: Sequelize.DOUBLE,
     },
     margemmaxima: {
        type: Sequelize.DOUBLE,
     },
     ativo: {
        type: Sequelize.CHAR(1),
     },
     percentual_markup: {
        type: Sequelize.DOUBLE,
     },
     vendedor_altera_preco: {
        type: Sequelize.STRING(1),
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
    await queryInterface.dropTable('grupoproduto');
  }
};
