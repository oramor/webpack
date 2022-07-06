import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const __dirname = '/home/romaro/webpack/webpack-dev-server-multipage/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

const pageList = ['MainPage', 'AboutPage'];
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

function getEntryPoints(pages) {
    const obj = {};
    pages.forEach((pageName) => {
        const pagePath = './' + path.join('pages', pageName + '.js');
        obj[pageName] = pagePath;
    });
    return obj;
}

export default {
    //entry: './entry.js',
    mode: 'development',
    context: srcPath,
    entry: getEntryPoints(pageList),
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
    },
};
