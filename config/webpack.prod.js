const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
        cart: `cart@${domain}/cart/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: {
        antd: "^4.17.2",
        react: "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^6.2.1",
        "styled-components": "^5.3.3",
      },
    }),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), `...`],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
