/* eslint-env node */

import { join } from "path";
const path = require("path");

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  //mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      //fs: require.resolve('rollup-plugin-node-builtins'),
      child_process: require.resolve("rollup-plugin-node-builtins"),
    },
  },

  build: {
    rollupOptions: {
      input: join(PACKAGE_ROOT, "index.ts"),
    },
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      formats: ["es"],
      fileName: () => "hello-plugin.js",
    },
  },
};

export default config;
