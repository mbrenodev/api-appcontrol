const { Model, DataTypes } = require("sequelize");

class ProdutoTipoItem extends Model {
  static init(sequelize) {
    super.init(
      {
        produtotipoitem_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: { type: DataTypes.STRING(50), require: true },
      },
      {
        tableName: "produtotipoitem",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, {
      foreignKey: "produtotipoitem_id",
      as: "produto",
    });
  }
}

module.exports = ProdutoTipoItem;
