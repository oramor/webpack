//import path from 'path';
import webpack from 'webpack';

console.log('-----------------------------------------');

const dstPath = '/home/romaro/webpack/webpack-ts-config/dist';
const srcPath = '/home/romaro/webpack/webpack-ts-config/src';

//const __dirname = '/home/romaro/webpack/webpack-ts';

const config: webpack.Configuration = {
    entry: './src/entry.ts',
    context: srcPath,
    output: {
        path: dstPath,
        filename: 'foo.bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

export default config;
