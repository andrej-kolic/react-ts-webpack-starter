const path = require('path');

const rootDir = process.cwd();
const sourceDir = path.resolve(rootDir, './src');
const targetDir = path.resolve(rootDir, './dist');

module.exports = {
  rootDir,
  sourceDir,
  targetDir,
};
