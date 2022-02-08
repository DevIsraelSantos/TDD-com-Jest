const path = require('path');

module.exports = {


  dialect: 'sqlite',
  storage: path.resolve('src', 'database', 'database.sqlite3'),
  define: {
    //created_at and update_at
    timestamps: true,

    //Nome de tabelas: snake case
    underscored: true,

    //campos de tabela em snake case
    underscoredAll: true,
  },
  // disable logging; default: console.log
  logging: false,

  //Desabilita um warning
  operatorsAliases:false,


}