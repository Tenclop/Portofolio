const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    babel: "babel-polyfill",
    index: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
    assetModuleFilename: "assets/images/[name].[hash][ext]",
  },
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      //babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //sass
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonJS
          "sass-loader", //1. Turns sass into css
        ],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(svg|webp|png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
