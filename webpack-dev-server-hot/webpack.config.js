import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-dev-server-hot/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

const pageList = ['MainPage'];
const srcExtension = 'html';
const dstExtension = 'html';
const postfix = '';

function getTemplatePath(pageName) {
    return `pages/${pageName}${postfix}.${srcExtension}`;
}

function getFileName(pageName) {
    return `./views/${pageName}.${dstExtension}`;
}

function getPagePlugins(pages) {
    const arr = [];

    pages.forEach((pageName) => {
        arr.push(
            new HtmlWebpackPlugin({
                template: getTemplatePath(pageName),
                filename: getFileName(pageName),
            }),
        );
    });

    return arr;
}

export default {
    entry: './entry.js',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    plugins: [new CleanWebpackPlugin(), ...getPagePlugins(pageList)],
    devServer: {
        static: {
            directory: srcPath,
        },
        compress: true,
        port: 9000,
        hot: true,
    },
};
