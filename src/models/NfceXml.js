const { Model, DataTypes } = require("sequelize");

class NfceXml extends Model {
  static init(sequelize) {
    super.init(
      {
        codnfce: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        seqnfce: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        xmlautorizado: DataTypes.BLOB,
        chnfce: DataTypes.STRING(50),
        loginusuario: DataTypes.STRING(20),
        codemp: DataTypes.INTEGER,
        flglog: DataTypes.STRING(1),
      },
      {
        tableName: "nfce_xml",
        sequelize,
      }
    );
  }
}

module.exports = NfceXml;
