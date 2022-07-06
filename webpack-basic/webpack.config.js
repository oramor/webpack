import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-basic/';
const outDir = __dirname + 'dist';
const srcDir = __dirname + 'src';

export default {
    /**
     * Указывается относительно директории, которая была задана
     * в качестве выходной (outputDir)
     */
    entry: './entry.js',
    mode: 'development',
    context: srcDir,
    output: {
        path: outDir,
        filename: '[name].bundle.js',
    },
    plugins: [new CleanWebpackPlugin()],
};
