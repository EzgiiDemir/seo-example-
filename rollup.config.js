import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "rollup-plugin-commonjs";

const config = {
  plugins: [terser(), commonjs(), resolve(), typescript()],
  external: ["react", "react-dom", "react-helmet", "next"],
};

export default [
  {
    input: "./src/index.tsx",
    output: [
      {
        file: "index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    ...config,
  },
  {
    input: "./src/next.tsx",
    output: [
      {
        file: "next.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    ...config,
  },
];
