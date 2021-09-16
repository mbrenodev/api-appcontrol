const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Genero = require('../models/Genero');
const Fabricante = require('../models/Fabricante');
const Produto = require('../models/Produto');
const GrupoProduto = require('../models/GrupoProduto');
const ProdutoTipoItem = require('../models/ProdutoTipoItem');
const SubGrupoProduto = require('../models/SubGrupoProduto');
const Tributo = require('../models/Tributo');
const UnidadeMedida = require('../models/UnidadeMedida');
const UsuarioLogin = require('../models/UsuarioLogin');
const UsuarioPrivilegio = require('../models/UsuarioPrivilegio');
const Programa = require('../models/Programa');
const NfceXml = require('../models/NfceXml');

const connection = new Sequelize(dbConfig)

Genero.init(connection);
Usuario.init(connection);
Tributo.init(connection);
Programa.init(connection);
NfceXml.init(connection);
Fabricante.init(connection);
GrupoProduto.init(connection);
UsuarioLogin.init(connection);
UsuarioPrivilegio.init(connection);
UnidadeMedida.init(connection);
ProdutoTipoItem.init(connection);
SubGrupoProduto.init(connection);
Produto.init(connection);

Genero.associate(connection.models);
Usuario.associate(connection.models);
Tributo.associate(connection.models);
Programa.associate(connection.models);
Fabricante.associate(connection.models);
GrupoProduto.associate(connection.models);
UsuarioLogin.associate(connection.models);
UsuarioPrivilegio.associate(connection.models);
UnidadeMedida.associate(connection.models);
ProdutoTipoItem.associate(connection.models);
SubGrupoProduto.associate(connection.models);
Produto.associate(connection.models);

module.exports = connection;