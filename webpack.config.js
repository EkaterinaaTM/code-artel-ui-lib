const nodeExternals = require("webpack-node-externals");
const path = require("path");

const tsxLoader = require("./configs/tsxLoader");
const graphqlLoader = require("./configs/graphqlLoader");
const fileLoaderConfig = require("./configs/fileLoaderConfig");

const pkg = require("./package.json");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: path.resolve(__dirname, 'src/index.tsx'),
  entry: [
    // '@babel/polyfill',
    path.resolve(__dirname, "src/index.tsx")
  ],
  devtool: "inline-source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",

    // library: pkg.name,
    libraryTarget: "commonjs"
  },
  externals: [nodeExternals()],
  module: {
    rules: [tsxLoader, graphqlLoader, fileLoaderConfig]
  },
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".ts",
      ".tsx",
      ".scss",
      ".css",
      ".html"
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
