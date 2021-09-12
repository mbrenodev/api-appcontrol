"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tributo", {
      tributos_id: {
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
      aliquota: {
        type: Sequelize.NUMERIC,
      },
      classificacao_fiscal: {
        type: Sequelize.STRING(2),
      },
      codigo_fiscal: {
        type: Sequelize.STRING(15),
      },
      substituicao_tributaria: {
        type: Sequelize.STRING(3),
      },
      reducao_fora_uf: {
        type: Sequelize.DOUBLE,
      },
      reducao_dentro_uf: {
        type: Sequelize.DOUBLE,
      },
      mva: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable("tributo");
  },
};
