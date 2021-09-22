const express = require("express");
const GeneroController = require("./controllers/GeneroController");
const FabricanteController = require("./controllers/FabricanteController");
const UsuarioController = require("./controllers/UsuarioController");
const UsuarioLoginController = require("./controllers/UsuarioLoginController");
const TributoController = require("./controllers/TributoController");
const GrupoProdutoController = require("./controllers/GrupoProdutoController");
const ProdutoTipoItem = require("./controllers/ProdutoTipoItemController");
const SubGrupoProdutoController = require("./controllers/SubGrupoProdutoController");
const UnidadeMedidaController = require("./controllers/UnidadeMedidaController");
const ProdutoController = require("./controllers/ProdutoController");
const ProgramaController = require("./controllers/ProgramaController");
const NfceXmlController = require("./controllers/NfceXmlController");

const routes = express.Router();

routes.get("/produtos", ProdutoController.index);
routes.post("/produtos", ProdutoController.store);
routes.put("/produto/:produto_id", ProdutoController.update);
routes.delete("/produto/:produto_id", ProdutoController.delete);


routes.get("/subgrupoprodutos", SubGrupoProdutoController.index);
routes.post("/subgrupoprodutos", SubGrupoProdutoController.store);
routes.put(
  "/subgrupoproduto/:subgrupoproduto_id",
  SubGrupoProdutoController.update
);
routes.delete(
  "/subgrupoproduto/:subgrupoproduto_id",
  SubGrupoProdutoController.delete
);

routes.get("/produtotipoitens", ProdutoTipoItem.index);
routes.post("/produtotipoitens", ProdutoTipoItem.store);
routes.put("/produtotipoitem/:produtotipoitem_id", ProdutoTipoItem.update);
routes.delete("/produtotipoitem/:produtotipoitem_id", ProdutoTipoItem.delete);

routes.get("/grupoprodutos", GrupoProdutoController.index);
routes.post("/grupoprodutos", GrupoProdutoController.store);
routes.put("/grupoproduto/:grupo_produto_id", GrupoProdutoController.update);
routes.delete("/grupoproduto/:grupo_produto_id", GrupoProdutoController.delete);

routes.get("/programas", ProgramaController.index);
routes.post("/programas", ProgramaController.store);
routes.put("/programa/:programa_id", ProgramaController.update);
routes.delete("/programa/:programa_id", ProgramaController.delete);

routes.get("/fabricantes", FabricanteController.index);
routes.post("/fabricantes", FabricanteController.store);
routes.put("/fabricante/:fabricante_id", FabricanteController.update);
routes.delete("/fabricante/:fabricante_id", FabricanteController.delete);

routes.get("/generos", GeneroController.index);
routes.post("/generos", GeneroController.store);
routes.put("/genero/:genero_id", GeneroController.update);
routes.delete("/genero/:genero_id", GeneroController.delete);

routes.get("/usuarios?", UsuarioController.index);
routes.post("/usuarios?", UsuarioController.store);
routes.put("/usuario/:usuario_id", UsuarioController.update);
routes.delete("/usuario/:usuario_id", UsuarioController.delete);

routes.post("/login", UsuarioController.login);

routes.get("/nfcexml", NfceXmlController.index);
routes.post("/nfcexml", NfceXmlController.store);


module.exports = routes;
