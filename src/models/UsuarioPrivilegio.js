const { Model, DataTypes } = require("sequelize");

class UsuarioPrivilegio extends Model {
  static init(sequelize) {
    super.init(
      {
        privilegio_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          require: true,
        },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        programa_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        incluir: DataTypes.STRING(1),
        alterar: DataTypes.STRING(1),
        excluir: DataTypes.STRING(1),
        imprimir: DataTypes.STRING(1),
        pesquisar: DataTypes.STRING(1),
      },
      {
        tableName: "usuarioprivilegio",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "usuario_id", as: "usuario" });
    this.belongsTo(models.Programa, { foreignKey: "programa_id", as: "programa" });
  }
}

module.exports = UsuarioPrivilegio;
