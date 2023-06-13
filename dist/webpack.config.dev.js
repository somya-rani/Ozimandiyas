"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [// ... (rest of the rules)
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/Login/login.html',
    filename: 'login.html'
  })],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    port: 8080,
    open: true
  }
};
n;