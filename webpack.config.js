const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './client/index.html'),
            filename: 'index.html',
          })],
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
      },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        proxy: {
            "/build": "http://localhost:3000",
            "/api": "http://localhost:3000",
        },
        compress: true,
        port: 8080,
        historyApiFallback: true
    }
};