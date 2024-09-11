const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'OrangeHRM Test result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com//",
    watchForFileChanges:false,
    autoRefresh:false,
    // testIsolation:false,
    // defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/*.js', 
      ]
      return config;
    },
  },
});