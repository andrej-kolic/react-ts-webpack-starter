import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { sourceDir, targetDir, templateDir } from '../helpers/paths.js';

export default {
  entry: `${sourceDir}/index.tsx`,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': sourceDir,
    },
  },
  output: {
    path: targetDir,
    filename: 'js/[name].[contenthash].js',
    // chunkFilename: 'js/[id].[chunkhash].chunk.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/',
    clean: true,
    asyncChunks: true,
  },
  // TODO: move to webpack.prod.js ?
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          // reuseExistingChunk: true,
          // priority: -10,
        },
      },
    },
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
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behavior
        },
      },
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
