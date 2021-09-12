const { Model, DataTypes } = require("sequelize");

class Fabricante extends Model {
  static init(sequelize) {
    super.init(
      {
        fabricante_id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        descricao: { type: DataTypes.STRING(50), require: true },
        ativo: DataTypes.CHAR(1),
        cnpj: DataTypes.STRING(14),
      },
      {
        tableName: "fabricante",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, { foreignKey: "fabricante_id", as: "produto" });
  }
}

module.exports = Fabricante;
