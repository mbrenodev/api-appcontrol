const Genero = require("../models/Genero");

module.exports = {
  async index(_req, res, next) {
    try {
      const generos = await Genero.findAll();
      return res.json(generos);
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

      const genero = await Genero.create({
        descricao,
      });

      return res.json(genero);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
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
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { genero_id } = req.params;
      const genero = await Genero.findByPk(genero_id);

      if (!genero) {
        return res.status(400).json({ error: "Genero não encontrado" });
      }

      await genero.destroy(genero_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },
};
