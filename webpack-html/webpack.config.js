import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-html/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

export default {
    entry: './main.js',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            /**
             * Путь до шаблона следует указывать относительно
             * точки входа (например, entry.js). Так же следует
             * обратить внимание на отсутствие "./"
             */
            template: 'index.html',
            /**
             * Путь указывается относительно директории с выходными
             * файлами (dstPath). Здесь "./" нужна.
             */
            filename: './views/index.html',
        }),
    ],
};
