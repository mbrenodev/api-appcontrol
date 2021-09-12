const SubGrupoProduto = require("../models/SubGrupoProduto");

module.exports = {
  async index(req, res) {
    const subgrupoproduto = await SubGrupoProduto.findAll();
    return res.json(subgrupoproduto);
  },

  async store(req, res) {
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
  },

  async update(req, res) {
    const { subgrupoproduto_id } = req.params;
    const {
      descricaosubgrupoproduto,
      ativo,
      pesavel,
      vendedor_altera_preco,
      markup,
    } = req.body;

    const subgrupoproduto = await SubGrupoProduto.findByPk(subgrupoproduto_id);

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
  },

  async delete(req, res) {
    const { subgrupoproduto_id } = req.params;
    const subgrupoproduto = await SubGrupoProduto.findByPk(subgrupoproduto_id);

    if (!subgrupoproduto) {
      return res
        .status(400)
        .json({ error: "Sub grupo de produto não encontrado" });
    }

    await subgrupoproduto.destroy(subgrupoproduto_id);
    return res.json();
  },
};
