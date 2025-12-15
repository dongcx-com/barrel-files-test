import { defineConfig, build } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: resolve(__dirname, "..", "index.ts"),
      name: "@vite/barrel-files-test",
      fileName: "index"
    }
  },
});

await build(config);
