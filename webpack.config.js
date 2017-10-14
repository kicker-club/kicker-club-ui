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
        extensions: ['*', '.js', '.jsx']
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
            exclude: ['index.html'],
            dry: true // TODO: false, if production
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
    devtool: 'eval-source-map'
};