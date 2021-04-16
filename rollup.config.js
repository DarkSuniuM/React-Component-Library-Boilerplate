import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
    }),
    postcss({
      plugins: [],
    }),
  ],
};
