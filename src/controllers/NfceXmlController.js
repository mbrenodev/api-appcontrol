const NfceXml = require("../models/NfceXml");

module.exports = {
  async index(_req, res, next) {
    try {
      const xml = await NfceXml.findAll();
      return res.json(xml);
    } catch (err) {
      next(err);
    }
  },
  async store(req, res, next) {
    try {
      const {
        codnfce,
        seqnfce,
        xmlautorizado,
        chnfce,
        loginusuario,
        codemp,
        flglog,
      } = req.body;

      const xml = xmlautorizado;

      const nfce_xml = await NfceXml.create({
        codnfce,
        seqnfce,
        xmlautorizado,
        chnfce,
        loginusuario,
        codemp,
        flglog,
      });
      return res.json(nfce_xml);
    } catch (err) {
      next(err);
    }
  },
};
