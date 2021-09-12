'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuariologin', { 
      login_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
     usuario_id: {
      type: Sequelize.INTEGER,
      references: { model: "usuario", key: "usuario_id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
    },
     tipo: {
        type: Sequelize.CHAR(1),
     },
     datalogin: {
        type: Sequelize.STRING(25),
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
    await queryInterface.dropTable('usuariologin');
  }
};
