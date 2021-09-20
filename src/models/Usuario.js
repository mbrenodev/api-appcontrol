const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          require: true,
        },
      identificacao: { type: DataTypes.STRING(50), unique: true, allowNull: false },
      senha: DataTypes.STRING(255),
      sup: DataTypes.STRING(1),
      ativo: DataTypes.STRING(1),
      dica: DataTypes.STRING(50),
      dataexpiracaosenha: DataTypes.DATE,
      codig_fun: DataTypes.INTEGER,
      cliente_id: DataTypes.INTEGER,
      vendedor_id: DataTypes.INTEGER,
      },
      {
        tableName: "usuario",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.UsuarioLogin, {
      foreignKey: "usuario_id",
      as: "usuariologin",
    });
    this.hasOne(models.UsuarioPrivilegio, { foreignKey: "usuario_id", as: "usuarioprivilegio" });
  }
}

module.exports = Usuario;
