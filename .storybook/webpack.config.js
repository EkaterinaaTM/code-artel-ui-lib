
const tsxLoader = require('../configs/tsxLoader');
const graphqlLoader = require('../configs/graphqlLoader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({config}) => {

  // tsxLoader.use[0].options.configFileName = path.resolve(__dirname, "../tsconfig.sb.json");
  config.module.rules.push(tsxLoader);

  config.module.rules.push(graphqlLoader);

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js');
  return config;
};
