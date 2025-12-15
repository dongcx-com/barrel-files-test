// global.d.ts
declare module "speed-measure-webpack-v5-plugin" {
  import { Compiler } from "webpack";

  class SpeedMeasurePlugin {
    constructor(options?: { disable?: boolean });
    wrap(config: any): any;
  }

  export default SpeedMeasurePlugin;
}