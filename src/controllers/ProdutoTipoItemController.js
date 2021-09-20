const ProdutoTipoItem = require("../models/ProdutoTipoItem");

module.exports = {
  async index(_req, res, next) {
    try {
      const produtotipoitem = await ProdutoTipoItem.findAll();
      return res.json(produtotipoitem);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { descricao } = req.body;

      if (!descricao || undefined || "") {
        return res.status(400).json({ error: "Descrição obrigatoria" });
      }

      const produtotipoitem = await ProdutoTipoItem.create({
        descricao,
      });
      return res.json(produtotipoitem);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { produtotipoitem_id } = req.params;
      const { descricao } = req.body;
      const produtotipoitem = await ProdutoTipoItem.findByPk(
        produtotipoitem_id
      );

      if (!produtotipoitem) {
        return res
          .status(400)
          .json({ error: "Tipo do produto não encontrado" });
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
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { produtotipoitem_id } = req.params;
      const produtotipoitem = await ProdutoTipoItem.findByPk(
        produtotipoitem_id
      );

      if (!produtotipoitem) {
        return res
          .status(400)
          .json({ error: "Tipo do produto não encontrado" });
      }

      await produtotipoitem.destroy(produtotipoitem_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },
};
