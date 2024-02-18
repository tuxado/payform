const path = require("path");

const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const SOURCE_DIRECTORY = path.resolve(path.join(process.cwd(), "src"));
const PUBLIC_DIRECTORY = path.resolve(path.join(process.cwd(), "public"));

const environment = process.env.NODE_ENV.trim() || "development";
const isDevelopmentMode = environment === "development";

const config = {
  entry: {
    payform: path.join(SOURCE_DIRECTORY, "index.ts"),
  },

  externals: {
    jquery: "jQuery",
    imask: "IMask"
  },

  resolve: {
    extensions: [".ts", ".js", ".scss", ".html", ".css"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopmentMode ? "[name].css" : "[name].[fullhash].css",
      chunkFilename: isDevelopmentMode ? "[id].css" : "[id].[fullhash].css",
    })
    
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        include: [SOURCE_DIRECTORY],
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopmentMode
            ? { loader: "style-loader" }
            : MiniCssExtractPlugin.loader,
          { loader: "css-modules-typescript-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
        include: [SOURCE_DIRECTORY],
      },
    ],
  },

  output: {
    path: PUBLIC_DIRECTORY,
    publicPath: "",
    filename: "[name].plugin.js",
  },

  optimization: {
    minimize: true,
    removeAvailableModules: true,
    mergeDuplicateChunks: true,
    minimizer: [new TerserPlugin({
      minify: TerserPlugin.uglifyJsMinify,
    }), new CssMinimizerPlugin()],
  },
};

module.exports = (env, argv) => {
  config.mode = environment;

  if (argv.mode !== undefined) {
    config.mode = argv.mode;
  }

  config.devtool = isDevelopmentMode
    ? "eval-cheap-module-source-map"
    : "source-map";

  return config;
};
