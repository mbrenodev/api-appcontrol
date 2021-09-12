const UsuarioPrivilegio = require("../models/UsuarioPrivilegio");

module.exports = {
  async index(req, res) {
    const privilegio = await UsuarioPrivilegio.findAll();
    return res.json(privilegio);
  },

  async store(req, res) {
    const {
      usuario_id,
      programa_id,
      incluir,
      alterar,
      excluir,
      imprimir,
      pesquisar,
    } = req.body;

    const privilegio = await UsuarioPrivilegio.create({
      usuario_id,
      programa_id,
      incluir,
      alterar,
      excluir,
      imprimir,
      pesquisar,
    });

    return res.json(privilegio);
  },

  async update(req, res) {
    const { privilegio_id } = req.params;
    const {
      usuario_id,
      programa_id,
      incluir,
      alterar,
      excluir,
      imprimir,
      pesquisar,
    } = req.body;

    const privilegio = await UsuarioPrivilegio.findByPk(privilegio_id);

    if (!privilegio) {
      return res.status(400).json({ error: "Privilegio não encontrado" });
    }

    await privilegio.update(
      {
        usuario_id,
        programa_id,
        incluir,
        alterar,
        excluir,
        imprimir,
        pesquisar,
      },
      { where: { privilegio_id: privilegio_id } }
    );

    return res.json(privilegio);
  },

  async delete(req, res) {
    const { privilegio_id } = req.params;
    const privilegio = await UsuarioPrivilegio.findByPk(privilegio_id);

    if (!privilegio) {
      return res.status(400).json({ error: "Privilegio não encontrado" });
    }

    await privilegio.destroy(privilegio_id);
    return res.json();
  },
};
