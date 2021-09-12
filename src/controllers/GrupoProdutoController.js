const GrupoProduto = require("../models/GrupoProduto");

module.exports = {
  async index(req, res) {
    const grupoproduto = await GrupoProduto.findAll();
    return res.json(grupoproduto);
  },

  async store(req, res) {
    const {
      descricao,
      margemminima,
      margemmaxima,
      ativo,
      percentual_markup,
      vendedor_altera_preco,
    } = req.body;

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    const grupoproduto = await GrupoProduto.create({
      descricao,
      margemminima,
      margemmaxima,
      ativo,
      percentual_markup,
      vendedor_altera_preco,
    });
    return res.json(grupoproduto);
  },

  async update(req, res) {
    const { grupo_produto_id } = req.params;
    const {
      descricao,
      margemminima,
      margemmaxima,
      ativo,
      percentual_markup,
      vendedor_altera_preco,
    } = req.body;

    const grupoproduto = await GrupoProduto.findByPk(grupo_produto_id);

    if (!grupoproduto) {
      return res.status(400).json({ error: "Grupo não encontrado" });
    }

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    await GrupoProduto.update(
      {
        descricao,
        margemminima,
        margemmaxima,
        ativo,
        percentual_markup,
        vendedor_altera_preco,
      },
      {
        where: { grupo_produto_id: grupo_produto_id },
      }
    );

    return res.json(grupoproduto);
  },

  async delete(req, res) {
    const { grupo_produto_id } = req.params;
    const grupoproduto = await GrupoProduto.findByPk(grupo_produto_id);

    if (!grupoproduto) {
      return res.status(400).json({ error: "Grupo não encontrado" });
    }

    await grupoproduto.destroy(grupo_produto_id);
    return res.json();
  },
};
