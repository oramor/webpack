import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = '/home/romaro/webpack/';
const dstPath = __dirname + 'webpack-scss/dist';
const srcPath = __dirname + 'webpack-scss/src';

export default {
    resolve: {
        modules: ['/home/romaro/webpack/node_modules', 'node_modules'],
    },
    context: srcPath,
    entry: './entry.js',
    output: {
        filename: '[name].bundle.js',
        path: dstPath,
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.woff(2)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
        ],
    },
};
