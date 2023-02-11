import { merge } from 'webpack-merge';

import common from './webpack.common.js';
// const { sourceDir, targetDir } = require('./paths');

export default merge(common, {
  mode: 'production',
});
