import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const fileName = "index";

const fileNameMap: Record<string, string> = {
  es: `${fileName}.mjs`,
  cjs: `${fileName}.js`,
};

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: "src/index.ts",
      //   formats: ["es", "cjs"],  // this can limit the target package range
      name: "MySdk",
      fileName: (format) => `my-sdk.${format}.js`,
      //   fileName: (format) => fileNameMap[format],
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: ["dist"],
      copyDtsFiles: true,
    }),
  ],
});
