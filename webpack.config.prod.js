const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  // Entry point for the application
  entry: "./src/ts/app.ts",

  // Output configuration
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Source maps for easier debugging
  //devtool: "inline-source-map",
  devtool: "source-map",

  // Module rules
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },

  // Resolve file extensions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CleanPlugin.CleanWebpackPlugin(),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },

  // Mode configuration
  //mode: "development",
  mode: "production",
};
