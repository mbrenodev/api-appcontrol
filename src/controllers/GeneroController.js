const Genero = require("../models/Genero");

module.exports = {
  async index(req, res) {
    const generos = await Genero.findAll();
    return res.json(generos);
  },

  async store(req, res) {
    const { descricao } = req.body;

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    const genero = await Genero.create({
      descricao,
    });

    return res.json(genero);
  },

  async update(req, res) {
    const { genero_id } = req.params;
    const { descricao } = req.body;

    const genero = await Genero.findByPk(genero_id);

    if (!genero) {
      return res.status(400).json({ error: "Genero não encontrado" });
    }

    if (!descricao || undefined || "") {
      return res.status(400).json({ error: "Descrição obrigatoria" });
    }

    await genero.update(
      { descricao },
      {
        where: { genero_id: genero_id },
      }
    );
    return res.json(genero);
  },

  async delete(req, res) {
    const { genero_id } = req.params;
    const genero = await Genero.findByPk(genero_id);

    if (!genero) {
      return res.status(400).json({ error: "Genero não encontrado" });
    }

    await genero.destroy(genero_id);
    return res.json();
  },
};
