// resolve: {
//   modules: ['node_modules'],
//     alias: {
//     'code-artel-ui-lib': path.resolve('src/'),
//   },
// },
const {CheckerPlugin} = require('awesome-typescript-loader');
const path = require('path');
const tsxLoader = require('../configs/tsxLoader');
const graphqlLoader = require('../configs/graphqlLoader');

module.exports = ({config}) => {

  tsxLoader.use[0].options.configFileName = path.resolve(__dirname, "../tsconfig.sb.json");
  config.module.rules.push(tsxLoader);

  config.module.rules.push(graphqlLoader);

  config.plugins.push(new CheckerPlugin());

  config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js');
  return config;
};
