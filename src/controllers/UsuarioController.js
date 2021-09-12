const Usuario = require("../models/Usuario");

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  },

  async store(req, res) {
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
  },

  async delete(req, res) {
    const { usuario_id } = req.params;
    const usuario = await Usuario.findByPk(usuario_id);

    if (!usuario) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    await usuario.destroy(usuario_id);
    return res.json();
  },

  async update(req, res) {
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
  },
};
