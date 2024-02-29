const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const path = require('path');

module.exports = (on, _) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: {
      resolve: {
        alias: {
          '@' : path.resolve(__dirname, '../')
        }
      }
    }
  }
  
  on('file:preprocessor', webpackPreprocessor(options))
}