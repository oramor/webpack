import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-basic/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

export default {
    entry: './entry.js',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    plugins: [new CleanWebpackPlugin()],
};
