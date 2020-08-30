const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        singleSpaEntry: [path.resolve(__dirname, 'src')+'/single-spa-root.js'],
        // 还可以多个入口，例如再加一个：
    },
    devServer: {
        contentBase: './dist',
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        hot: true,
        historyApiFallback: true,
        inline: true,
        progress: true,
        port: 9002,
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
        libraryTarget: 'umd',
        library: 'app2',
        filename: 'singleSpaEntry.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
        ]
    },
    // 如果是生产环境，即 mode: 'production'，用 devtool: 'cheap-module-source-map' 比较好。
};