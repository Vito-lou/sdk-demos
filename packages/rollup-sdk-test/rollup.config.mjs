import typescript from 'rollup-plugin-typescript2';

import path from 'path'

import dts from 'rollup-plugin-dts';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'es'
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name: 'MySDK',
                globals: {
                    // Add any global variables your SDK might depend on
                }
            }
        ],
        plugins: [
            typescript(
                //     {
                //     tsconfig: './tsconfig.json',
                //     declaration: true,
                //     declarationDir: './dist',
                // }
            ),
        ]
    },
    {
        //打包声明文件:
        // Output structure: The dts() plugin creates a single bundled declaration file, while the typescript() plugin generates individual declaration files for each source file.
        input: "./src/typing.d.ts",
        output: {
            file: path.resolve(__dirname, './dist/index.d.ts'),
            format: "es",
        },
        plugins: [dts()]
    }
];