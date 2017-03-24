const webpack = require('webpack');
const path = require('path');

module.exprots = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/path',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filenam: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};