const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MergeFilesPlugin = require('merge-files-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/css-bundle.css');
const extractLess = new ExtractTextPlugin('stylesheets/less-bundle.css');

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
      'action-creators': path.resolve(__dirname, 'src/action-creators.js'),
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
      // TODO: minify css, if production
    }, {
      test: /\.css$/,
      loader: extractCSS.extract("css-loader?url=false"),
    }]
  },
  plugins: [
    extractCSS,
    extractLess,
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html', 'img'],
      dry: true // TODO: False if production.
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
  // TODO: Don't include source maps if production
  // Or use cheap-module-eval-source-map
  devtool: 'eval-source-map'
};