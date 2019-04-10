const path = require('path');

module.exports = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: require.resolve('awesome-typescript-loader'),
      options:{
        configFileName: path.resolve(__dirname, "../tsconfig.json")
      }
    }
  ]
}
