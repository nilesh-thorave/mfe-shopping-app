const path = require("path");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [paths.src + "/index.js"],
  // Where files should be sent once they are bundled
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
    uniqueName: "shopping-app",
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TW Geeks Night",
      // favicon: paths.src + "/assets/icons/favicon-dark-mode.ico",
      template: paths.public + "/index.html", // template file
      filename: "index.html",
    }),
  ],
};
