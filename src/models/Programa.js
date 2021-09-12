const { Model, DataTypes } = require("sequelize");

class Programa extends Model {
  static init(sequelize) {
    super.init(
      {
        programa_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        nome_programa: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
          require: true
        },
        descricao: { type: DataTypes.STRING(50), allowNull: false, require:true },
        ordemmenu: DataTypes.INTEGER,
        sequencia: DataTypes.INTEGER,
        restricao: DataTypes.CHAR(1),
        status: DataTypes.INTEGER,
        nome_menu: DataTypes.STRING(35),
        menu_nivel1: DataTypes.STRING(35),
        menu_nivel2: DataTypes.STRING(35),
        menu_nivel3: DataTypes.STRING(35),
        menu_nivel4: DataTypes.STRING(35),
        menu_nivel5: DataTypes.STRING(35),
        menu_nivel6: DataTypes.STRING(35),
        visible: DataTypes.STRING(1)
      },
      {
        tableName: "programa",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.UsuarioPrivilegio, { foreignKey: "programa_id", as: "usuarioprivilegio" });
  }
}

module.exports = Programa;
