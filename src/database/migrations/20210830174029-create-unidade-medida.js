"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("unidademedida", {
      unidade_medida_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      fracao: {
        type: Sequelize.CHAR(1),
      },
      unidade: {
        type: Sequelize.CHAR(2),
      },
      ativo: {
        type: Sequelize.CHAR(1),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("unidademedida");
  },
};
