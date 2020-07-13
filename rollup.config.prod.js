const path = require("path");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");
const {terser} = require("rollup-plugin-terser");
const inputPath = path.resolve(__dirname, "./src/index.js");
const outputUmdPath = path.resolve(__dirname, "./dist/index.min.js");
const outputEsPath = path.resolve(__dirname, "./dist/index.es.min.js");
module.exports = {
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    vue(),
    postcss({
        plugins:[]
    }),
    terser()
  ],
  input: inputPath,
  external: [],
  output: [
    {
      file: outputUmdPath,
      format: "umd",
      name: "datav",
    },
    {
      file: outputEsPath,
      format: "es",
    },
  ],
};
