import * as dotEnvSafe from 'dotenv-safe';
dotEnvSafe.config();

import { merge } from 'webpack-merge';

import common from './webpack.common.js';

// const { sourceDir, targetDir } = require('./paths');

export default merge(common, {
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
