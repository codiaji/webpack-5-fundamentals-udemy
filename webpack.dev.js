/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  devServer:{
    static: './dist'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },
      {
        test: /\.scss$/i,
        use:[
          {
            loader:MiniCssExtractPlugin.loader,
            options:{

            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Development'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};