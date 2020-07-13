const path = require("path");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const inputPath = path.resolve(__dirname, "./src/index.js");
const outputUmdPath = path.resolve(__dirname, "./dist/index.js");
const outputEsPath = path.resolve(__dirname, "./dist/index.es.js");
module.exports = {
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    json()
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
