// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sourceDir, targetDir } = require('./paths');

module.exports = {
  entry: `${sourceDir}/index.ts`,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: targetDir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactTs starter',
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    client: {
      overlay: false,
    },
  },
};
