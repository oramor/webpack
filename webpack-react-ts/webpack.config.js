import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-react-ts/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

export default {
    entry: './main.tsx',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    resolve: {
        /**
         * Если в импорте явно не указано расширение файла,
         * по умолчанию ищется только js.
         */
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
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'main.html',
            filename: './main.html',
        }),
    ],
    devServer: {
        static: {
            directory: srcPath,
        },
        compress: true,
        port: 9000,
    },
};
