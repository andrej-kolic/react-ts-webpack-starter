// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
// const { sourceDir, targetDir } = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true, // proxy requests through a specified index page (enable reload without 404)
    hot: true,
    open: false,
    client: {
      overlay: false,
    },
  },
});
