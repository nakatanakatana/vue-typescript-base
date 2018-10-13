const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('../environment/base');

let config = {
  entry: helpers.root("src/main.ts"),
  mode: 'development',
  output: {
    path: helpers.root('/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].chunk.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'ts': 'ts-loader?configFile=tsconfig.app.json',
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          configFile: 'tsconfig.app.json',
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: helpers.root('src/index.html'),
      favicon: helpers.root('src/favicon.ico')
    }),
    new CopyWebpackPlugin([{
      from: helpers.root('src/assets'),
      to: './assets'
    },
      {
        from: 'src/serviceworker.js',
        to: './'
      }
    ]),
    new VueLoaderPlugin(),
    new ForkTsChecker({
      tsconfig: 'tsconfig.app.json',
      tslint: true,
      vue: true,
    }),
    new DefinePlugin({
      'process.env': env,
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};

module.exports = config;
