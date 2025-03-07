import packagejson from '@cozka/rollup-create-dist-packagejson';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

// node_modules配下のdependenciesはバンドルしない。下記の正規表現の指定をするためには'@rollup/plugin-node-resolve'が必要
const EXTERNAL = [/[\\/]node_modules[\\/]/, /[\\/]dist[\\/]/];

// esmodule用とcommonjs用のソースを出力する
const options = {
  // エントリーポイント
  input: 'src/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: EXTERNAL,
  treeshake: false,
  plugins: [
    nodeResolve(),
    typescript({
      filterRoot: 'src',
      tsconfig: 'tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      declarationMap: false,
      outDir: 'dist',
      rootDir: 'src',
    }),
    packagejson({
      content: {
        main: 'index.d.ts',
        types: 'index.d.ts',
        files: ['**/*'],
      },
    }),
    copy({
      targets: [
        {
          src: ['LICENSE', 'README.md', 'README.ja.md'],
          dest: 'dist',
        },
      ],
    }),
  ],
};

export default options;
