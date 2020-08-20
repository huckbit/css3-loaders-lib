const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  plugins: [new MiniCssExtractPlugin({ filename: "./css/[name]/[name].css" })],
});
