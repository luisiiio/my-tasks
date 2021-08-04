/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@store": path.resolve(__dirname, "src/app/store"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@templates": path.resolve(__dirname, "src/templates/"),
      "@organisms": path.resolve(__dirname, "src/organisms/"),
      "@molecules": path.resolve(__dirname, "src/molecules/"),
      "@atoms": path.resolve(__dirname, "src/atoms/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
