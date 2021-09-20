const Programa = require("../models/Programa");

module.exports = {
  async index(_req, res, next) {
    try {
      const programa = await Programa.findAll();
      return res.json(programa);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const {
        nome_programa,
        descricao,
        ordemmenu,
        sequencia,
        restricao,
        status,
        nome_menu,
        menu_nivel1,
        menu_nivel2,
        menu_nivel3,
        menu_nivel4,
        menu_nivel5,
        menu_nivel6,
        visible,
      } = req.body;

      const programa = await Programa.create({
        nome_programa,
        descricao,
        ordemmenu,
        sequencia,
        restricao,
        status,
        nome_menu,
        menu_nivel1,
        menu_nivel2,
        menu_nivel3,
        menu_nivel4,
        menu_nivel5,
        menu_nivel6,
        visible,
      });

      return res.json(programa);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { programa_id } = req.params;
      const {
        nome_programa,
        descricao,
        ordemmenu,
        sequencia,
        restricao,
        status,
        nome_menu,
        menu_nivel1,
        menu_nivel2,
        menu_nivel3,
        menu_nivel4,
        menu_nivel5,
        menu_nivel6,
        visible,
      } = req.body;

      const programa = await Programa.findByPk(programa_id);

      if (!programa) {
        return res.status(400).json({ error: "Programa não encontrado" });
      }

      await programa.update(
        {
          nome_programa,
          descricao,
          ordemmenu,
          sequencia,
          restricao,
          status,
          nome_menu,
          menu_nivel1,
          menu_nivel2,
          menu_nivel3,
          menu_nivel4,
          menu_nivel5,
          menu_nivel6,
          visible,
        },
        { where: { programa_id } }
      );

      return res.json(programa);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { programa_id } = req.params;
      const programa = await Programa.findByPk(programa_id);

      if (!programa) {
        return res.status(400).json({ error: "Programa não encontrado" });
      }

      await programa.destroy(programa_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },
};
