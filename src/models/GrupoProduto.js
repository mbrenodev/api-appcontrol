const { Model, DataTypes } = require("sequelize");

class GrupoProduto extends Model {
  static init(sequelize) {
    super.init(
      {
        grupo_produto_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: { type: DataTypes.STRING(50), require: true, unique: true },
        margemminima: DataTypes.DOUBLE,
        margemmaxima: DataTypes.DOUBLE,
        ativo: DataTypes.CHAR(1),
        percentual_markup: DataTypes.DOUBLE,
        vendedor_altera_preco: DataTypes.STRING(1),
      },
      {
        tableName: "grupoproduto",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, {
      foreignKey: "grupo_produto_id",
      as: "produto",
    });
  }
}

module.exports = GrupoProduto;
