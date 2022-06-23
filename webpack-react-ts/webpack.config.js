import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = '/home/romaro/webpack/webpack-react-ts/';
const dstPath = __dirname + 'dist';
const srcPath = __dirname + 'src';

export default {
    entry: './Hello.tsx',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    plugins: [new CleanWebpackPlugin()],
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
    devServer: {
        static: {
            directory: srcPath,
        },
        compress: true,
        port: 9000,
    },
};
