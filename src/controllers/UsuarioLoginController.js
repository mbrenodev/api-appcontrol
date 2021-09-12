const UsuarioLogin = require("../models/UsuarioLogin");

module.exports = {
  async index(req, res) {
    const usuariologin = await UsuarioLogin.findAll();
    return res.json(usuariologin);
  },

  async store(req, res) {
    const { usuario_id, tipo, datalogin } = req.body;

    const usuariologin = await UsuarioLogin.create({
      usuario_id,
      tipo,
      datalogin,
    });

    return res.json(usuariologin);
  },

  async update(req, res) {
    const { login_id } = req.params;
    const { usuario_id, tipo, datalogin } = req.body;

    const login = await UsuarioLogin.findByPk(login_id);

    if (!login) {
      return res.status(400).json({ error: "Login não encontrado" });
    }

    await login.update(
      {
        usuario_id,
        tipo,
        datalogin,
      },
      { where: { login_id } }
    );

    return res.json(login);
  },

  async delete(req, res){
    const { login_id } = req.params;
    const login = await UsuarioLogin.findByPk(login_id);

    if (!login) {
      return res.status(400).json({ error: "Login não encontrado" });
    }

    await login.destroy(login_id);
    return res.json();
  }
};
