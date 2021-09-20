const SubGrupoProduto = require("../models/SubGrupoProduto");

module.exports = {
  async index(_req, res, next) {
    try {
      const subgrupoproduto = await SubGrupoProduto.findAll();
      return res.json(subgrupoproduto);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const {
        descricaosubgrupoproduto,
        ativo,
        pesavel,
        vendedor_altera_preco,
        markup,
      } = req.body;

      if (!descricaosubgrupoproduto || undefined || "") {
        return res.status(400).json({ error: "Descrição obrigatoria" });
      }

      const subgrupoproduto = await SubGrupoProduto.create({
        descricaosubgrupoproduto,
        ativo,
        pesavel,
        vendedor_altera_preco,
        markup,
      });
      return res.json(subgrupoproduto);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { subgrupoproduto_id } = req.params;
      const {
        descricaosubgrupoproduto,
        ativo,
        pesavel,
        vendedor_altera_preco,
        markup,
      } = req.body;

      const subgrupoproduto = await SubGrupoProduto.findByPk(
        subgrupoproduto_id
      );

      if (!subgrupoproduto) {
        return res
          .status(400)
          .json({ error: "Sub grupo de produto não encontrado" });
      }

      if (!descricaosubgrupoproduto || undefined || "") {
        return res.status(400).json({ error: "Descrição obrigatoria" });
      }

      await SubGrupoProduto.update(
        {
          descricaosubgrupoproduto,
          ativo,
          pesavel,
          vendedor_altera_preco,
          markup,
        },
        {
          where: { subgrupoprodutoid: subgrupoproduto_id },
        }
      );

      return res.json(subgrupoproduto);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { subgrupoproduto_id } = req.params;
      const subgrupoproduto = await SubGrupoProduto.findByPk(
        subgrupoproduto_id
      );

      if (!subgrupoproduto) {
        return res
          .status(400)
          .json({ error: "Sub grupo de produto não encontrado" });
      }

      await subgrupoproduto.destroy(subgrupoproduto_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },
};
