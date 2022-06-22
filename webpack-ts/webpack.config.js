import { CleanWebpackPlugin } from 'clean-webpack-plugin';

console.log('-----------------------------------------');

const dstPath = '/home/romaro/webpack/webpack-ts/dist';
const projectPath = '/home/romaro/webpack/webpack-ts/';

function getEntryPoints(points) {
    const obj = {
        // index: './entry.ts',
    };

    points.forEach((pointName) => {
        obj[pointName] = `./src/${pointName}.ts`;
    });

    return obj;
}

const pointsList = ['Phone', 'Car'];

export default {
    entry: getEntryPoints(pointsList),
    mode: 'development',
    context: projectPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
