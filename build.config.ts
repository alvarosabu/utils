import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [{
    input: 'src/index.ts',
    name: 'as-utils',
  }],

  // Change outDir, default is 'dist'
  outDir: 'dist',

  // Generates .d.ts declaration file
  declaration: true,
})
