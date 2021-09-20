const Fabricante = require("../models/Fabricante");

module.exports = {
  async index(_req, res, next) {
    try {
      const fabricantes = await Fabricante.findAll();
      return res.json(fabricantes);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
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
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
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
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { fabricante_id } = req.params;
      const fabricante = await Fabricante.findByPk(fabricante_id);

      if (!fabricante) {
        return res.status(400).json({ error: "Fabricante não encontrado" });
      }

      await fabricante.destroy(fabricante_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },
};
