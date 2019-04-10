module.exports = {
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
}
