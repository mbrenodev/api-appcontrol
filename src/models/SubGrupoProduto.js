const { Model, DataTypes } = require("sequelize");

class SubGrupoProduto extends Model {
  static init(sequelize) {
    super.init(
      {
        subgrupoprodutoid: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        descricaosubgrupoproduto: {
          type: DataTypes.STRING(50),
          require: true,
          unique: true,
        },
        ativo: DataTypes.CHAR(1),
        pesavel: DataTypes.CHAR(1),
        vendedor_altera_preco: DataTypes.STRING(1),
        markup: DataTypes.DOUBLE,
      },
      {
        tableName: "subgrupoproduto",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, {
      foreignKey: "subgrupoprodutoid",
      as: "produto",
    });
  }
}

module.exports = SubGrupoProduto;
