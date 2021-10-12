const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    },

    plugins: [
        new Dotenv(),
    ],

    devtool: 'source-map',
}