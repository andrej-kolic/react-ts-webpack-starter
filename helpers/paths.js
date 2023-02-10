const path = require('path');

const rootDir = process.cwd();
const sourceDir = path.resolve(rootDir, './src');
const targetDir = path.resolve(rootDir, './dist');
const webpackConfigDir = path.resolve(rootDir, './webpack');
const templateDir = webpackConfigDir;

module.exports = {
  rootDir,
  sourceDir,
  targetDir,
  templateDir,
};
