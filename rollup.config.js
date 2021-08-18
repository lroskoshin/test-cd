import ts from '@wessberg/rollup-plugin-ts';

console.log('Build for role: ', process.env.role)

const config = {
    input: [
        './src/core.ts',
    ],
    output: [
        { dir: './dist', format: 'esm', sourcemap: false, esModule: true, preserveModules: true },
    ],
    plugins: [
        ts(),
    ]
};
export default config;