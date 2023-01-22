const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
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
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactTs starter',
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // contentBase: targetAppDirectory,
    // host: 'localhost', // required to ensure a secure origin for Auth0 usage: https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin
    // port: Number.parseInt(process.env.DEVELOPMENT_SERVER_PORT || '10000', 10),
    // historyApiFallback: true,
    // compress: true,
    hot: true,
    open: true,
    client: {
      overlay: false,
    },
  },
};
