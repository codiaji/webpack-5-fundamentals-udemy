/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index:{import:'./src/js/index.js', dependOn:'shared'},
    sum:{import:'./src/js/sum.js', dependOn:'shared'},
    shared:'lodash',
  }, 
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },
    ]
  },
  optimization:{
    splitChunks:{
      chunks:'all',
    }
  },
  plugins:[
    new HtmlWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};