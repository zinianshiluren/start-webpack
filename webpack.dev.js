const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: ["./src/index.tsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./config/template.default.ejs"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    port: 8081,
    host: "127.0.0.1",
    proxy: {
      "/api/*": {
        target: "http://localhost:7001",
        changeOrigin: true,
        secure: false
      }
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loaders: "babel-loader",
        options: {
          presets: ["@babel/typescript", "@babel/env", "@babel/react"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-proposal-nullish-coalescing-operator",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/proposal-class-properties", { loose: true }]
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: ["css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: require.resolve("css-loader")
          },
          {
            loader: require.resolve("sass-loader")
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            // 将小于8K的图片以base64的形式打包到js文件中
            options: {
              limit: 8192,
              name: "pic/[name].[hash:7].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
    modules: ["node_modules"]
  }
};
