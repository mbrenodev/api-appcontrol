const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res, next) {
    try {
      const { identificacao, senha } = req.body;

      if(!identificacao || undefined || null){
        return res.status(400).send("Usuario não encontrado")
      }

      const user = await Usuario.findByPk(usuario_id)
      console.log(user)


    } catch (error) {
      next(error);
    }
  },
};
