// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
// const { sourceDir, targetDir } = require('./paths');

module.exports = merge(common, {
  mode: 'production',
});
