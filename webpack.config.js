const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist/"),
    assetModuleFilename: "assets/[contenthash].[ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.png$|.jpg$|.gif$|.webp$|.svg$/,
        type: "asset/resource"
      },
      {
        test: /.html$/,
        use: "html-loader",
      }
    ]
  }
};