const { Model, DataTypes } = require("sequelize");

class UsuarioLogin extends Model {
  static init(sequelize) {
    super.init(
      {
        login_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          require: true,
        },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        tipo: DataTypes.CHAR(1),
        datalogin: DataTypes.STRING(25),
      },
      {
        tableName: "usuariologin",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "usuario_id", as: "usuario" });
  }
}

module.exports = UsuarioLogin;
