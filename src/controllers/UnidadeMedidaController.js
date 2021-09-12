const UnidadeMedida = require("../models/UnidadeMedida");

module.exports = {
  async index(req, res) {
    const unidademedida = await UnidadeMedida.findAll();
    return res.json(unidademedida);
  },

  async store(req, res) {
    const { descricao, fracao, unidade, ativo } = req.body;

    if (!descricao || !fracao || !unidade || undefined || "") {
      return res
        .status(400)
        .json({ error: "Campos obrigatorios a serem preenchidos" });
    }

    const unidademedida = await UnidadeMedida.create({
      descricao,
      fracao,
      unidade,
      ativo,
    });
    return res.json(unidademedida);
  },

  async update(req, res) {
    const { unidade_medida_id } = req.params;
    const { descricao, fracao, unidade, ativo } = req.body;

    const unidademedida = await UnidadeMedida.findByPk(unidade_medida_id);

    if (!unidademedida) {
      return res
        .status(400)
        .json({ error: "Unidade de medida não encontrado" });
    }

    if (!descricao || !fracao || !unidade || undefined || "") {
      return res
        .status(400)
        .json({ error: "Campos obrigatorios a serem preenchidos" });
    }

    await UnidadeMedida.update(
      {
        descricao,
        fracao,
        unidade,
        ativo,
      },
      {
        where: { unidade_medida_id: unidade_medida_id },
      }
    );

    return res.json(unidademedida);
  },

  async delete(req, res) {
    const { unidade_medida_id } = req.params;
    const unidademedida = await UnidadeMedida.findByPk(unidade_medida_id);

    if (!unidademedida) {
      return res
        .status(400)
        .json({ error: "Unidade de medida não encontrado" });
    }

    await unidademedida.destroy(unidade_medida_id);
    return res.json();
  },
};
