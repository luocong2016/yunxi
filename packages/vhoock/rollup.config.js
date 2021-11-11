import glob from 'fast-glob';
const srcFiles = glob.sync('**/*.ts', {
  ignore: ['**/node_modules'],
});

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
// const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  const input = {};
  srcFiles.forEach((srcFile) => {
    input[srcFile.match(/^src\/(\S*).ts$/)[1]] = srcFile;
  });

  const external = ['vue', 'vue-router', 'loadash'];
  const plugins = [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),
    // isProduction && (await import('rollup-plugin-terser')).terser(),
  ];

  return [
    {
      input,
      plugins,
      external,
      output: {
        dir: 'lib/esm',
        format: 'esm',
        globals: {
          vue: 'Vue',
          loadash: '_',
        },
      },
    },
    {
      input,
      plugins,
      external,
      output: {
        dir: 'lib/cjs',
        format: 'cjs',
        globals: {
          vue: 'Vue',
          loadash: '_',
        },
      },
    },
    {
      input: 'src/index.ts',
      plugins,
      external,
      output: {
        name: 'Vhoock',
        file: `lib/index.min.js`,
        format: 'umd',
        globals: {
          vue: 'Vue',
          loadash: '_',
        },
      },
    },
    {
      input: 'src/index.ts',
      plugins: [dts()],
      external,
      output: {
        file: `lib/index.d.ts`,
        format: 'esm',
      },
    },
  ];
}

export default build();
