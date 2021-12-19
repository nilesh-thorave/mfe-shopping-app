const Dotenv = require("dotenv-webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",
  // Control how source maps are generated
  devtool: "inline-source-map",
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: false,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
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
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
        cart: "cart@http://localhost:3002/remoteEntry.js",
        auth: "auth@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        antd: "^4.17.2",
        react: "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^6.2.1",
        "styled-components": "^5.3.3",
      },
    }),
  ].filter(Boolean),
});
