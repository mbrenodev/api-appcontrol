"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nfce_xml", {
      codnfce: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      seqnfce: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      xmlautorizado: {
        type: Sequelize.BLOB,
      },
      chnfce: {
        type: Sequelize.STRING(50),
      },
      loginusuario: {
        type: Sequelize.STRING(20),
      },
      codemp: {
        type: Sequelize.INTEGER,
      },
      flglog: {
        type: Sequelize.STRING(1),
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("nfce_xml");
  },
};
