const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MergeFilesPlugin = require('merge-files-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/css-bundle.css');
const extractLess = new ExtractTextPlugin('stylesheets/less-bundle.css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'action-creators': path.resolve(__dirname, 'src/action-creators/'),
      components: path.resolve(__dirname, 'src/components/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      resources: path.resolve(__dirname, 'src/resources.js'),
      consts: path.resolve(__dirname, 'src/consts.js'),
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: extractLess.extract(['css-loader', 'less-loader']),
    }, {
      test: /\.css$/,
      loader: extractCSS.extract({
        use: [{
          loader: 'css-loader',
          options: {
            url: false,
            minimize: isProduction
          }
        }]
      }),
    }]
  },
  plugins: [
    extractCSS,
    extractLess,
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html', 'img'],
      dry: !isProduction
    }),
    new MergeFilesPlugin({
      filename: 'bundle.css',
      test: /\.css/,
      deleteSourceFiles: true
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  devtool: isProduction
    ? false
    : 'eval-source-map' // Or cheap-module-eval-source-map.
};