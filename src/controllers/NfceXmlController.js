const NfceXml = require("../models/NfceXml");

module.exports = {
  async index(_req, res, next) {
    try {
      const xml = await NfceXml.findAll();
      return res.json(xml);
    } catch (error) {
      next(error);
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
    } catch (error) {
      next(error);
    }
  },

  async report(req, res, next) {
    const { data_inicial, data_final } = req.body;
    const xml = await NfceXml.findAll({ 
      where: { xmlautorizado } 
    });
    console.log(xml.xmlautorizado);
  },
};
