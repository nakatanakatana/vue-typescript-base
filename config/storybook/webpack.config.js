const ForkTsChecker = require('fork-ts-checker-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]'
      }
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  );
  config.plugins.push(
    new ForkTsChecker({
      tslint: true,
      vue: true,
    }),
    new DefinePlugin({
      'process.env': env,
    }),
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
