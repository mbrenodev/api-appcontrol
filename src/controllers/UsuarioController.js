const Usuario = require("../models/Usuario");

module.exports = {
  async index(_req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async store(req, res) {
    try {
      const {
        identificacao,
        senha,
        sup: any, //é preciso alterar o nome da field pois super é uma palavra reservada.
        ativo,
        dica,
        dataexpiracaosenha,
        codig_fun,
        cliente_id,
        vendedor_id,
      } = req.body;

      const usuario = await Usuario.create({
        identificacao,
        senha,
        sup: any, //é preciso alterar o nome da field pois super é uma palavra reservada.
        ativo,
        dica,
        dataexpiracaosenha,
        codig_fun,
        cliente_id,
        vendedor_id,
      });
      return res.json(usuario);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { usuario_id } = req.params;
      const usuario = await Usuario.findByPk(usuario_id);

      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }

      await usuario.destroy(usuario_id);
      return res.json();
    } catch (error) {
      return res.status(300).send(error);
    }
  },

  async update(req, res) {
    try {
      const { usuario_id } = req.params;
      const {
        identificacao,
        senha,
        sup: any,
        ativo,
        dica,
        dataexpiracaosenha,
        codig_fun,
        cliente_id,
        vendedor_id,
      } = req.body;

      const usuario = await Usuario.findByPk(usuario_id);

      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }

      await usuario.update(
        {
          identificacao,
          senha,
          sup: any,
          ativo,
          dica,
          dataexpiracaosenha,
          codig_fun,
          cliente_id,
          vendedor_id,
        },
        {
          where: { usuario_id: usuario_id },
        }
      );
      return res.json(usuario);
    } catch (error) {
      return res.status(300).send(error);
    }
  },
};
