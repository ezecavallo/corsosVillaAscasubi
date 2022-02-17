const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    success: "./src/success.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/template/",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/image/"),
      "@styles": path.resolve(__dirname, "src/assets/style/"),
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   use: { loader: "html-loader" },
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].png",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contenthash].css",
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebPackPlugin({
      template: "./public/success.html",
      filename: "success.html",
      chunks: ["success"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets", "images"),
          to: "assets/images",
        },
        {
          from: path.resolve(__dirname, "src", "assets", "favicon"),
          to: "assets/images",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  },
};
