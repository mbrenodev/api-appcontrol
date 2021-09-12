const { Model, DataTypes } = require("sequelize");

class UnidadeMedida extends Model {
  static init(sequelize) {
    super.init(
      {
        unidade_medida_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: { type: DataTypes.STRING(50), require: true, unique: true },
        fracao: { type: DataTypes.CHAR(1), require: true },
        unidade: { type: DataTypes.CHAR(2), require: true },
        ativo: DataTypes.CHAR(1),
      },
      {
        tableName: "unidademedida",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, {
      foreignKey: "unidade_medida_id",
      as: "produto",
    });
  }
}

module.exports = UnidadeMedida;
