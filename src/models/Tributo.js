const { Model, DataTypes } = require("sequelize");

class Tributo extends Model {
  static init(sequelize) {
    super.init(
      {
        tributos_id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          require: true,
        },
        descricao: { type: DataTypes.STRING(50), require: true, unique: true },
        aliquota: DataTypes.NUMERIC,
        classificacao_fiscal: DataTypes.STRING(2),
        codigo_fiscal: DataTypes.STRING(15),
        substituicao_tributaria: DataTypes.STRING(3),
        reducao_fora_uf: DataTypes.DOUBLE,
        reducao_dentro_uf: DataTypes.DOUBLE,
        mva: DataTypes.DOUBLE,
        ativo: DataTypes.CHAR(1),
      },
      {
        tableName: "tributo",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, { foreignKey: "tributos_id", as: "produto" });
  }
}

module.exports = Tributo;
