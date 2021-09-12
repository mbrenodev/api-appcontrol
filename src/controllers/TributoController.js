const Tributo = require("../models/Tributo");

module.exports = {
  async index(req, res) {
    const tributos = await Tributo.findAll();
    return res.json(tributos);
  },

  async store(req, res) {
    const {
      descricao,
      aliquota,
      classificacao_fiscal,
      codigo_fiscal,
      substituicao_tributaria,
      reducao_fora_uf,
      reducao_dentro_uf,
      mva,
      ativo,
    } = req.body;

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    const tributo = await Tributo.create({
      descricao,
      aliquota,
      classificacao_fiscal,
      codigo_fiscal,
      substituicao_tributaria,
      reducao_fora_uf,
      reducao_dentro_uf,
      mva,
      ativo,
    });
    return res.json(tributo);
  },

  async update(req, res) {
    const { tributo_id } = req.params;
    const {
      descricao,
      aliquota,
      classificacao_fiscal,
      codigo_fiscal,
      substituicao_tributaria,
      reducao_fora_uf,
      reducao_dentro_uf,
      mva,
      ativo,
    } = req.body;

    const tributo = await Tributo.findByPk(tributo_id);

    if (!tributo) {
      return res.status(400).json({ error: "Tributo não encontrado" });
    }

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    await tributo.update(
      {
        descricao,
        aliquota,
        classificacao_fiscal,
        codigo_fiscal,
        substituicao_tributaria,
        reducao_fora_uf,
        reducao_dentro_uf,
        mva,
        ativo,
      },
      {
        where: { tributos_id: tributo_id },
      }
    );

    return res.json(tributo);
  },

  async delete(req, res) {
    const { tributo_id } = req.params;
    const tributo = await Tributo.findByPk(tributo_id);

    if (!tributo) {
      return res.status(400).json({ error: "Tributo não encontrado" });
    }

    await tributo.destroy(tributo_id);
    return res.json();
  },
};
