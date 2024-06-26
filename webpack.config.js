const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { options } = require('less');

module.exports = {
    mode: 'development',
    entry:  './src/index.tsx',
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname,  'dist')
    },
    plugins: [
        new  HtmlWebpackPlugin({
            title: 'Real Madrid',
            template: path.relative(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                // test: /\.(?:ts|tsx)$/,
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
};