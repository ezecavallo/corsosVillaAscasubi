const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    success: "./src/success.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "./images/[name].[contenthash][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "assets/[hash].[ext]",
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebPackPlugin({
      template: "./public/success.html",
      filename: "success.html",
      chunks: ["success"],
    }),
    new MiniCssExtractPlugin({
      filename: "assets/style/[name].css",
    }),
    // new CleanWebpackPlugin(),
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
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
