/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};