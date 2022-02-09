/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

  //-----------------------------------------------
  // Stop running tests after `n` failures
  //Para na primeira falha
  bail: true,

  //-----------------------------------------------
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  //-----------------------------------------------
  //Habilitar Analise de test
  collectCoverage: true,
  collectCoverageFrom: [
      //Testar tudo de src
      'src/**',

      //Não testar migrations e server
      '!src/database/migrations/**', '!src/server.js'
    ],
    
  coverageDirectory: "__tests__/coverage",

  //-----------------------------------------------
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  //-----------------------------------------------
  //Arquivos de test
   testMatch: [
     "**/__tests__/**/*.test.js?(x)",
   ],
};
