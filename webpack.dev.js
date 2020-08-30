const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: ['babel-polyfill',path.resolve(__dirname, 'src')+'/app.jsx'],
        // 还可以多个入口，例如再加一个：
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        inline: true,
        progress: true,
        port: 8080,
        host: '127.0.0.1',
        proxy: {
        '/api/*': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        secure: false
            }
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 将小于8K的图片以base64的形式打包到js文件中
                        options: {
                            limit: 8192,
                            name:'pic/[name].[hash:7].[ext]'
                        },
                    }
                ]
            },
        ]
    }
    // 如果是生产环境，即 mode: 'production'，用 devtool: 'cheap-module-source-map' 比较好。
};