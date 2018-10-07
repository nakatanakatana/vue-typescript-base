const helpers = require('./helpers');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');

let config = {
  entry: helpers.root("src/main.ts"),
  mode: 'development',
  output: {
    path: helpers.root('/trash'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|vue|css)$/,
        use: 'raw-loader',
      }
    ]
  },
  plugins: [
    new ForkTsChecker({
      tslint: true,
      vue: true,
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};

module.exports = config;
