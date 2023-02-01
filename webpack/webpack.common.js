// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { sourceDir, targetDir, templateDir } = require('./paths');

module.exports = {
  entry: `${sourceDir}/index.tsx`,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': sourceDir,
    },
  },
  output: {
    filename: 'bundle.js',
    path: targetDir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactTs starter',
      template: `${templateDir}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
  module: {
    rules: [
      // loaders
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
