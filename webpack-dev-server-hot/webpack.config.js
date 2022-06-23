/**
 * Возможность горячего обновления поддерживается из коробки.
 * По этой причине можно не вносить в конфигурацию.
 */

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
        /**
         * Видимо, если явно не задано в watchFiles, то файлы будут
         * отслеживаться в этой директории/директориях
         * https://webpack.js.org/configuration/dev-server/#devserverstatic
         */
        static: {
            directory: srcPath,
        },
        compress: true,
        port: 9000,
        /**
         * Включает горячее обновление модулей (Hot Module Replacement).
         * Не следует путать с обновлением страницы, которое управляется
         * через liveReload. При значении 'only', горячая замена модулей
         * будет работать, но обновление страницы не будет происходить.
         * Вроде как аналогично тому, чтобы поставить true
         * и liveReload: false
         */
        hot: true,
        /**
         * При помощи этой опции можно ограничить файлы, которые
         * будут отслеживаться. Видимо, по умолчанию отслеживаются файлы,
         * которые лежат в директории, указанной в devServer.static
         */
        watchFiles: ['src/**/*.tsx', 'dist/**/*'],
        /**
         * Каким-то хитрым образом взаимодействует с hot, но при отключении
         * страница обновляться не будет. Вроде как аналогично hot: false
         * или hot: 'only'
         */
        liveReload: true,
    },
};
