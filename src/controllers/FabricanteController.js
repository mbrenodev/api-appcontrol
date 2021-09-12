const Fabricante = require("../models/Fabricante");

module.exports = {
  async index(req, res) {
    const fabricantes = await Fabricante.findAll();
    return res.json(fabricantes);
  },

  async store(req, res) {
    const { descricao, ativo, cnpj } = req.body;

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    const fabricante = await Fabricante.create({
      descricao,
      ativo,
      cnpj,
    });
    return res.json(fabricante);
  },

  async update(req, res) {
    const { fabricante_id } = req.params;
    const { descricao, ativo, cnpj } = req.body;

    const fabricante = await Fabricante.findByPk(fabricante_id);

    if (!fabricante) {
      return res.status(400).json({ error: "Fabricante não encontrado" });
    }

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    await Fabricante.update(
      { descricao, ativo, cnpj },
      {
        where: { fabricante_id: fabricante_id },
      }
    );

    return res.json(fabricante);
  },

  async delete(req, res) {
    const { fabricante_id } = req.params;
    const fabricante = await Fabricante.findByPk(fabricante_id);

    if (!fabricante) {
      return res.status(400).json({ error: "Fabricante não encontrado" });
    }

    await fabricante.destroy(fabricante_id);
    return res.json();
  },
};
