/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|txt|)$/,
          type: "asset/inline",
        },
      ],
    },
    devServer: {
      // contentBase: path.join(__dirname, "build"),
      hot: argv && argv.mode === "production" ? false : true,
      historyApiFallback: true,
      host: "0.0.0.0",
      compress: true,
      hot: true,
      port: env.PORT || 3000,
      // publicPath: "/",
    },
    devtool: "source-map",
    output: {
      filename: "[name].bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
        favicon: "./public/images/favicon.svg",
      }),
    ],
  };
};
