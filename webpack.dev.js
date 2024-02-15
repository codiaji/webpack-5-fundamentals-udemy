/** @type {import('webpack').Configuration} */
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
<<<<<<< HEAD
module.exports = merge(common,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    static: './dist'
  },
=======
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'production',
>>>>>>> d1e884fd255d32c860122b7292b786e1002f9203
  module: {
    rules:[
      {
        test: /\.scss$/i,
        use:[
<<<<<<< HEAD
          {loader:'css-loader', options:{sourceMap:true}},
          {loader:'postcss-loader', options:{sourceMap:true}},
          {loader:'sass-loader', options:{sourceMap:true}},
=======
          {
            loader:MiniCssExtractPlugin.loader,
            options:{

            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
>>>>>>> d1e884fd255d32c860122b7292b786e1002f9203
        ]
      }
    ]
  },
<<<<<<< HEAD
});
=======
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ],
};
>>>>>>> d1e884fd255d32c860122b7292b786e1002f9203
