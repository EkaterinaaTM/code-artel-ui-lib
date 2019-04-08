// resolve: {
//   modules: ['node_modules'],
//     alias: {
//     'code-artel-ui-lib': path.resolve('src/'),
//   },
// },
const { CheckerPlugin, TsConfigPathsPlugin  } =  require ('awesome-typescript-loader')
const path =  require ('path');

module.exports = ({config}) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.module.rules.push({
    test: /\.(graphql|graphqls|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });

  config.module.rules.push( {
    enforce: "pre",
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: /node_modules/,
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            /** @desc https://www.styled-components.com/docs/tooling#control-the-components-displayname */
            fileName: false,
            /** @desc https://www.styled-components.com/docs/tooling#control-the-components-displayname */
            displayName: false,
            /** @desc https://www.styled-components.com/docs/tooling#serverside-rendering */
            ssr: true,
            /** @desc https://www.styled-components.com/docs/tooling#dead-code-elimination */
            pure: true,
            /** @desc https://www.styled-components.com/docs/tooling#minification */
            minify: true,
          },
        ],
        '@babel/plugin-proposal-class-properties',
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
      ],
    },
  },);

  config.plugins.push(new CheckerPlugin());

  config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js');
  return config;
};
