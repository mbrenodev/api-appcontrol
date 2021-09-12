const { Model, DataTypes } = require("sequelize");

class Genero extends Model {
  static init(sequelize) {
    super.init(
      {
        genero_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false
        },
        descricao: { type: DataTypes.STRING, require: true },
      },
      {
        tableName: "genero",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Produto, { foreignKey: "genero_id", as: "produto" });
  }
}

module.exports = Genero;
