const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  // entry: ['./src/index.js', './src/index-new.js'],
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(svg|jpg|JPG)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          /**
           * for css loader
           */
          // 'style-loader', 'css-loader'
          /**
           * for extracting seperate file styles.css
           */
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          /**
           * for scss loader
           */
          // 'style-loader', 'css-loader', 'sass-loader'
          /**
           * for extracting seperate file style.css
           */
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    /**
     * to reduce bundle size
     */
    new TerserPlugin(),
    /**
     * to extract css into seperate file
     */
    new MiniCssExtractPlugin({
      filename: "styles-[contenthash].css",
    }),
    /**
     * to clean bundle completely
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    /**
     * to customize the html and also generate html
     */
    new HtmlWebPackPlugin({
        filename: 'index1.html',
        inject: 'body',
        title: 'Hello'
    }),
  ],
};
