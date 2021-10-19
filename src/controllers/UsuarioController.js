const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

module.exports = {
  async session(req, res, next) {
    const { identificacao, senha } = req.body;
    const user = await Usuario.findAll({ where: { identificacao } });

    try {
      if (user.length === 1) {
        if (await bcrypt.compare(senha, user[0].senha)) {
          const token = jwt.sign(
            { id: user[0].usuario_id },
            process.env.APP_SECRET,
            {
              expiresIn: "1d",
            }
          );

          const data = {
            id: user[0].usuario_id,
            name: user[0].identificacao,
            token,
          };

          return res.json(data);
        } else {
          return res.status(404).json({ messege: "User not found" });
        }
      } else {
        return res.status(404).json({ messege: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  },

  async index(_req, res, next) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {;
      const hashedPassword = await bcrypt.hash(req.body.senha, 10);

      const {
        identificacao,
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
        senha: hashedPassword,
        sup: any, //é preciso alterar o nome da field pois super é uma palavra reservada.
        ativo,
        dica,
        dataexpiracaosenha,
        codig_fun,
        cliente_id,
        vendedor_id,
      });

      return res.json(usuario);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { usuario_id } = req.params;
      const usuario = await Usuario.findByPk(usuario_id);

      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }

      await usuario.destroy(usuario_id);
      return res.json();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { usuario_id } = req.params;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.senha, salt);
      const senha = hashedPassword;
      const {
        identificacao,
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
      next(error);
    }
  },
};
