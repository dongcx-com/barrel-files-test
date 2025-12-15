import { build } from "tsdown";
import {dirname,resolve} from "node:path"
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

await build({
  entry: resolve(__dirname, "..", "index.ts"),
  outDir: "dist",
  minify: true,
  sourcemap: true,
});
