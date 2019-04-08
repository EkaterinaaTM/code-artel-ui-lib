import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import babel from 'rollup-plugin-babel'
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  external: ["stream"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs()
,
    // commonjs({
    //   include: "node_modules/**",
    //   exclude: [
    //     'node_modules/@storybook',
    //     'node_modules/@babel',
    //     'node_modules/@svgr',
    //     'node_modules/@types',
    //     'node_modules/awesome-typescript-loader',
    //     'node_modules/babel-plugin-styled-components',
    //     /node_modules[/]@storybook-\\w+/g,
    //     /node_modules[/]babel-\\w+/g,
    //     /node_modules[/]babel-plugin-\\w+/g,
    //     /node_modules[/]rollup-plugin-\\w+/g,
    //     /node_modules[/]react-docgen-\\w+/g,
    //   ],
    //
    //   namedExports: {
    //     "node_modules/react-is/index.js": [
    //       "isElement",
    //       "isValidElementType",
    //       "ForwardRef"
    //     ]
    //   }
    // })
  ]
};
