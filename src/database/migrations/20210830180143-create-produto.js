"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produto", {
      produto_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      codigo_produto: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true,
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      codigo_usuario: {
        type: Sequelize.STRING(14),
      },
      grupo_produto_id: {
        type: Sequelize.INTEGER,
        references: { model: "grupoproduto", key: "grupo_produto_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fabricante_id: {
        type: Sequelize.INTEGER,
        references: { model: "fabricante", key: "fabricante_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tributos_id: {
        type: Sequelize.INTEGER,
        references: { model: "tributo", key: "tributos_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      unidade_medida_id: {
        type: Sequelize.INTEGER,
        references: { model: "unidademedida", key: "unidade_medida_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      subgrupoprodutoid: {
        type: Sequelize.INTEGER,
        references: { model: "subgrupoproduto", key: "subgrupoprodutoid" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sub_grupo_id: {
        type: Sequelize.INTEGER,
      },
      imobilizado: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      reducao_icms: {
        type: Sequelize.NUMERIC(9),
      },
      limite_desconto: {
        type: Sequelize.NUMERIC(9),
      },
      aliquota_icms: {
        type: Sequelize.NUMERIC(9),
      },
      aliquota_ipi: {
        type: Sequelize.NUMERIC(9),
      },
      estoque_atual: {
        type: Sequelize.NUMERIC(15),
      },
      estoque_minumo: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      estoque_maximo: {
        type: Sequelize.NUMERIC(15),
      },
      preco_custo: {
        type: Sequelize.NUMERIC(15),
      },
      preco_venda: {
        type: Sequelize.NUMERIC(15),
      },
      preco_brasindice: {
        type: Sequelize.NUMERIC(15),
      },
      perc_aumento: {
        type: Sequelize.NUMERIC(9),
      },
      data_ult_compra: {
        type: Sequelize.DATE,
      },
      valor_ult_compra: {
        type: Sequelize.NUMERIC(15),
      },
      data_ult_venda: {
        type: Sequelize.DATE,
      },
      valor_ult_venda: {
        type: Sequelize.NUMERIC(15),
      },
      validade: {
        type: Sequelize.NUMERIC(15),
      },
      fator: {
        type: Sequelize.DOUBLE,
      },
      peso_liquido: {
        type: Sequelize.DOUBLE,
      },
      peso_bruto: {
        type: Sequelize.DOUBLE,
      },
      caracteristica: {
        type: Sequelize.STRING(35),
      },
      icms_ult_compra: {
        type: Sequelize.NUMERIC(15),
      },
      data_primeira_venda: {
        type: Sequelize.DATE,
      },
      aliquota_pis_cofins: {
        type: Sequelize.NUMERIC(9),
      },
      ativo: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      outros_valores: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      valor_unitario: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      preco_custo_venda: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      indice_agregado: {
        type: Sequelize.NUMERIC(9),
      },
      aliquota_cofins: {
        type: Sequelize.DOUBLE,
      },
      limite_acrescimo: {
        type: Sequelize.DOUBLE,
      },
      nomeclatura_mercosul: {
        type: Sequelize.STRING(8),
      },
      base_icms_subs_ult_compra: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      vlr_icms_subs_ult_compra: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      giromedio: {
        type: Sequelize.DOUBLE,
      },
      piscofins: {
        type: Sequelize.CHAR(1),
      },
      dataultimaalteracao: {
        type: Sequelize.DATE,
      },
      localimagemproduto: {
        type: Sequelize.STRING,
      },
      observacoes: {
        type: Sequelize.BLOB,
      },
      peso: {
        type: Sequelize.STRING(10),
      },
      medida: {
        type: Sequelize.STRING(20),
      },
      amperagem: {
        type: Sequelize.STRING(20),
      },
      norma: {
        type: Sequelize.STRING(20),
      },
      tipocorrente: {
        type: Sequelize.STRING(50),
      },
      modelo: {
        type: Sequelize.STRING(20),
      },
      numero_frabricacao: {
        type: Sequelize.STRING(20),
      },
      data_fabricacao: {
        type: Sequelize.STRING(20),
      },
      alimentacao: {
        type: Sequelize.STRING(20),
      },
      corrente_sem_carga: {
        type: Sequelize.STRING(20),
      },
      corrente_com_carga: {
        type: Sequelize.STRING(20),
      },
      dc_abertura: {
        type: Sequelize.STRING(20),
      },
      tensao_arco: {
        type: Sequelize.STRING(20),
      },
      corrente_saida: {
        type: Sequelize.STRING(20),
      },
      ciclo_trabalho: {
        type: Sequelize.STRING(20),
      },
      precovendaanterior: {
        type: Sequelize.NUMERIC(15),
      },
      genero_id: {
        type: Sequelize.INTEGER,
        references: { model: "genero", key: "genero_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      produtotipoitem_id: {
        type: Sequelize.INTEGER,
        references: { model: "produtotipoitem", key: "produtotipoitem_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cst_pis: {
        type: Sequelize.STRING(3),
      },
      cst_cofins: {
        type: Sequelize.STRING(3),
      },
      estoque_reserva: {
        type: Sequelize.DOUBLE,
      },
      cst_pis_saida: {
        type: Sequelize.STRING(3),
      },
      cst_cofins_saida: {
        type: Sequelize.STRING(3),
      },
      aliquota_pis_cofins_saida: {
        type: Sequelize.DOUBLE,
      },
      aliquota_cofins_saida: {
        type: Sequelize.DOUBLE,
      },
      cst_ipi: {
        type: Sequelize.STRING(2),
      },
      piscofinstab437_id: {
        type: Sequelize.INTEGER,
      },
      natureza_operacao: {
        type: Sequelize.INTEGER,
      },
      inicio_promocao: {
        type: Sequelize.DATE,
      },
      fim_promocao: {
        type: Sequelize.DATE,
      },
      dataultimaatualizacaopreco: {
        type: Sequelize.DATE,
      },
      ippt: {
        type: Sequelize.STRING(1),
      },
      produto_entrega: {
        type: Sequelize.STRING(1),
      },
      markup: {
        type: Sequelize.DOUBLE,
      },
      vendedor_altera_preco: {
        type: Sequelize.STRING(1),
      },
      numero_ultima_nota: {
        type: Sequelize.INTEGER,
      },
      data_inclusao: {
        type: Sequelize.DATE,
      },
      margem_lucro: {
        type: Sequelize.DOUBLE,
      },
      markup_margem: {
        type: Sequelize.STRING(1),
      },
      aliquota_st: {
        type: Sequelize.DOUBLE,
      },
      preco_custo_anterioir: {
        type: Sequelize.NUMERIC(15),
      },
      outras_observacoes: {
        type: Sequelize.STRING(100),
      },
      taxa_embalagem: {
        type: Sequelize.DOUBLE,
      },
      diferenca_icm_sn: {
        type: Sequelize.STRING(1),
      },
      taxa_embalagem_sn: {
        type: Sequelize.STRING(1),
      },
      frete_sn: {
        type: Sequelize.STRING(1),
      },
      diferenca_icm_soma_sub: {
        type: Sequelize.STRING(1),
      },
      taxa_embalagem_soma_sub: {
        type: Sequelize.STRING(1),
      },
      taxa_embalagem_p_v: {
        type: Sequelize.STRING(1),
      },
      frete_item_p_v: {
        type: Sequelize.STRING(1),
      },
      frete_soma_sub: {
        type: Sequelize.STRING(1),
      },
      frete_item: {
        type: Sequelize.NUMERIC(15),
      },
      diferenca_icm: {
        type: Sequelize.NUMERIC(15),
      },
      dataultimaatualizacaoprecocusto: {
        type: Sequelize.DATE,
      },
      nota_fiscal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_ultima_compra: {
        type: Sequelize.DOUBLE,
      },
      data_de_validade: {
        type: Sequelize.DATE,
      },
      codncm: {
        type: Sequelize.STRING(10),
      },
      cest: {
        type: Sequelize.STRING(10),
      },
      origem: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      referencia: {
        type: Sequelize.STRING(50),
      },
      fator_transferencia: {
        type: Sequelize.NUMERIC(15),
        allowNull: false,
      },
      tabelaservico_id: {
        type: Sequelize.STRING(14),
      },
      tabelaatividade_id: {
        type: Sequelize.INTEGER,
      },
      qtdacionaprecopromocao: {
        type: Sequelize.INTEGER,
      },
      producaopropria: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      valorcustoproducao: {
        type: Sequelize.NUMERIC(15),
      },
      postospremia: {
        type: Sequelize.NUMERIC(15),
      },
      resgatepremia: {
        type: Sequelize.NUMERIC(15),
      },
      codorigem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precopromopor_periodo_qtd: {
        type: Sequelize.STRING(1),
      },
      produtocomvariacoes: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("produto");
  },
};
