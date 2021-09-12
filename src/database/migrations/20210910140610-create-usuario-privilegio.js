'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarioprivilegio', { 
      privilegio_id: {
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
      unique: true
    },
     programa_id: {
      type: Sequelize.INTEGER,
      references: { model: "programa", key: "programa_id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      unique: true
    },
     incluir: {
        type: Sequelize.STRING(1),
     },
     alterar: {
        type: Sequelize.STRING(1),
     },
     excluir: {
        type: Sequelize.STRING(1),
     },
     imprimir: {
        type: Sequelize.STRING(1),
     },
     pesquisar: {
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
    await queryInterface.dropTable('usuarioprivilegio');
  }
};
