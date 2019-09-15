const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./app/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    modules: [path.resolve("./app"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [htmlPlugin],
};
