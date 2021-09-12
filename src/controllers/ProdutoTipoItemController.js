const ProdutoTipoItem = require("../models/ProdutoTipoItem");

module.exports = {
  async index(req, res) {
    const produtotipoitem = await ProdutoTipoItem.findAll();
    return res.json(produtotipoitem);
  },

  async store(req, res) {
    const { descricao } = req.body;

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    const produtotipoitem = await ProdutoTipoItem.create({
      descricao,
    });
    return res.json(produtotipoitem);
  },

  async update(req, res) {
    const { produtotipoitem_id } = req.params;
    const { descricao } = req.body;

    const produtotipoitem = await ProdutoTipoItem.findByPk(produtotipoitem_id);

    if (!produtotipoitem) {
      return res.status(400).json({ error: "Tipo do produto não encontrado" });
    }

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    await ProdutoTipoItem.update(
      { descricao },
      {
        where: { produtotipoitem_id: produtotipoitem_id },
      }
    );

    return res.json(produtotipoitem);
  },

  async delete(req, res) {
    const { produtotipoitem_id } = req.params;
    const produtotipoitem = await ProdutoTipoItem.findByPk(produtotipoitem_id);

    if (!produtotipoitem) {
      return res.status(400).json({ error: "Tipo do produto não encontrado" });
    }

    await produtotipoitem.destroy(produtotipoitem_id);
    return res.json();
  },
};
