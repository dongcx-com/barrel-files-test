import {build} from 'tsdown'

await build({
  entry: 'src/index.ts',
  outDir: 'dist',
  minify: true,
  sourcemap: true
})