/**
 * При такой конфигурации все страницы получают ссылки на один
 * и тот же бандлер. Чтобы добавить чанки, следует использовать
 * HtmlWebpackInjector
 */

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = '/home/romaro/webpack/plugin-HtmlWebpackPlugin/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

const pageList = ['MainPage'];
const srcExtension = 'html';
const dstExtension = 'html';
const postfix = '';

function getTemplatePath(pageName) {
    /**
     * Путь до шаблона следует указывать относительно
     * файла entry.js. Так же следует обратить внимание на
     * отсутствие "./"
     */
    return `pages/${pageName}${postfix}.${srcExtension}`;
}

function getFileName(pageName) {
    /**
     * Путь относительно dstPath, в котором указывается
     * абсолютный путь до директории сборки
     */
    return `./views/${pageName}.${dstExtension}`;
}

function getPagePlugins(pages) {
    const arr = [];

    pages.forEach((pageName) => {
        arr.push(
            // Для каждой страницы создается отдельный экземпляр плагина
            new HtmlWebpackPlugin({
                // Путь до шаблона
                template: getTemplatePath(pageName),
                // Имя скомпилированного файла
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
};
