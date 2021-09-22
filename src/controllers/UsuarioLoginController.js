const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res, next) {
    try {
      const { identificacao, senha } = req.body;
      const user = await Usuario.findOne({ identificacao, senha });
      if (user === null || undefined) {
        return res.status(400).send("Usuario não encontrado");
      } else {
        console.log(user.identificacao);
        console.log(user.senha);
      }

      // const senha = await bcrypt.compare(user.senha, hash);
    } catch (error) {
      next(error);
    }
  },
};
