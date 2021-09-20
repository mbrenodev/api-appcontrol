const UsuarioLogin = require("../models/UsuarioLogin");

module.exports = {
  async index(_req, res, next) {
    try {
      const usuariologin = await UsuarioLogin.findAll();
      return res.json(usuariologin);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { usuario_id, tipo, datalogin } = req.body;
      const usuariologin = await UsuarioLogin.create({
        usuario_id,
        tipo,
        datalogin,
      });
      return res.json(usuariologin);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
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
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { login_id } = req.params;
      const login = await UsuarioLogin.findByPk(login_id);
  
      if (!login) {
        return res.status(400).json({ error: "Login não encontrado" });
      }
  
      await login.destroy(login_id);
      return res.json();     
    } catch (error) {
      next(error)
    }
  },
};
