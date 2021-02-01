/* eslint-disable */

"use strict";

const path = require("path");
const merge = require("webpack-merge");
const { HashedModuleIdsPlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

const common = require("./webpack.common");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(CURRENT_WORKING_DIR, "build"),
    filename: "js/[name].[contenthash:8].js",
    chunkFilename: "js/[name].[contenthash:8].chunk.js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              publicPath: "images",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              publicPath: "../fonts",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: true,
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    // runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //     },
    //     styles: {
    //       test: /\.css$/,
    //       name: "styles",
    //       chunks: "all",
    //       enforce: true,
    //     },
    //   },
    // },
    splitChunks: {
      chunks: "all",
      name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new WorkerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, "src/public/index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      include: [/\.js$/],
      runtimeCaching: [
        {
          urlPattern: new RegExp("."),
          handler: "StaleWhileRevalidate",
        },
        {
          urlPattern: new RegExp(
            "https://fonts.googleapis.com|https://fonts.gstatic.com"
          ),
          handler: "CacheFirst",
        },
      ],
    }),
    new WebpackPwaManifest({
      name: "React MobX Starter",
      short_name: "MobXStarter",
      description: "React MobX Starter!",
      background_color: "#fff",
      theme_color: "#1f1f1f",
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve("src/public/images/pwa.png"),
          destination: "images",
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: path.resolve("src/public/images/pwa.png"),
          destination: "images",
          sizes: [120, 152, 167, 180],
          ios: true,
        },
        {
          src: path.resolve("src/public/images/pwa.png"),
          destination: "images",
          sizes: "196x196",
          purpose: "maskable",
        },
      ],
    }),
    new OptimizeCssAssetsPlugin({}),
    new HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20,
    }),
  ],
});
