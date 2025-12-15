import { library, webpack } from "webpack";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import SpeedMeasurePlugin from "speed-measure-webpack-v5-plugin";

const smp = new SpeedMeasurePlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = smp.wrap({
  entry: resolve(__dirname, "..", "index.ts"),
  output: {
    path: resolve(__dirname, "../../", "dist"),
    filename: "bundle.js",
    clean: true,
    library:{
      name: "@webpack/barrel-files-test",
      type: "umd"
    }
  },
  mode: "production",
  resolve: {
    extensions: [".ts", "..."],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "report.html",
      openAnalyzer: false, // 不自动打开浏览器
    }),
  ],
})

const build = webpack(config);

build.run((err, res) => {
  // console.log("done",res);
  if (err || res?.hasErrors()) {
    console.log("error", err || res?.toString({ colors: true }));
  }
  build.close(() => {});
});
