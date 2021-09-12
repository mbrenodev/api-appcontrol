"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("programa", {
      programa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_programa: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      ordemmenu: {
        type: Sequelize.INTEGER,
      },
      sequencia: {
        type: Sequelize.INTEGER,
      },
      restricao: {
        type: Sequelize.CHAR(1),
      },
      status: {
        type: Sequelize.INTEGER,
      },
      nome_menu: {
        type: Sequelize.STRING(35),
      },
      menu_nivel1: {
        type: Sequelize.STRING(35),
      },
      menu_nivel2: {
        type: Sequelize.STRING(35),
      },
      menu_nivel3: {
        type: Sequelize.STRING(35),
      },
      menu_nivel4: {
        type: Sequelize.STRING(35),
      },
      menu_nivel5: {
        type: Sequelize.STRING(35),
      },
      menu_nivel6: {
        type: Sequelize.STRING(35),
      },
      visible: {
        type: Sequelize.STRING(1),
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
    await queryInterface.dropTable("programa");
  },
};
