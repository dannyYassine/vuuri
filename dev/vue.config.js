const path = require('path');

module.exports = {
  devServer: {
    public: '127.0.0.1',
    port: 8080,
    disableHostCheck: true,
    progress: false,
    watchOptions: {
      ignored: [/node_modules/],
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  lintOnSave: process.env.NODE_ENV === 'production' ? 'default' : true,
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          '/@': path.resolve(__dirname, './src')
        }
      }
    }
  }
};
