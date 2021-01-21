/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// https://docs.cypress.io/guides/guides/plugins-guide.html
const webpackPlugin = require('./webpack.plugin');
const codeCoveragePlugin = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  const plugin = {
    ...config,
    fixturesFolder: 'tests/cypress/fixtures',
    integrationFolder: 'tests/cypress/integration',
    screenshotsFolder: 'tests/cypress/screenshots',
    videosFolder: 'tests/cypress/videos',
    supportFile: 'tests/cypress/support/index.js'
  };
  
  codeCoveragePlugin(on, config)
  webpackPlugin(on, config);
  
  return plugin;
};
