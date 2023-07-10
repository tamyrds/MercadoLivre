const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'of6enx',
  e2e: {
    baseUrl: 'https://www.mercadolivre.com.br',
    
    setupNodeEvents(on, config) {

    },
    
  },
},
)
