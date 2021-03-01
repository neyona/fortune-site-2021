// fortune_docker/webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack'); // this is needed for environmental variables to work
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleTracker = require('webpack-bundle-tracker');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
  entry: './frontend/src/index.js',
  mode: 'development',
  output: {
    // path: path.resolve(__dirname, 'static'), // output to BASE_DIR/static, assumes webpack.json is on the same level as manage.py
    path: path.resolve(__dirname, 'frontend/static'), // output to BASE_DIR/static, assumes webpack.json is on the same level as manage.py
    publicPath: '/', // IF THIS IS REMOVED, THE SITE IS NOT SERVED, AND MIME TYPE ISSUES COME UP
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
  },

  module: {
    rules: [
	  {
	    test: /\.(js|jsx)$/,
	    exclude: /node_modules/,
	    use: {
	      loader: 'babel-loader'
        },
	  },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(ico|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 600000, // 600kB
              // name: 'img/[name].[hash:7].[ext]'
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      },

	],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './frontend/static'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    // writeToDisk: true,
    // contentBase: path.join(__dirname, 'frontend', 'static'),
    // // contentBase: path.resolve(__dirname, './frontend/templates/frontend'),
    publicPath: '/',
    // compress: true,
    // hot: true,
    // host: 'localhost',
    // port: 3000,
    // historyApiFallback: true, // Necessary for react-router-dom to work
    // allowedHosts: [
    //     '127.0.0.1',
    //     'localhost',
    // ],
  },

  plugins: [
    new CleanWebpackPlugin(),  // removes outdated assets from the output directory
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './frontend/templates/frontend/index.html'), // template file
      filename: './index.html', // output file
      favicon: './frontend/templates/frontend/favicons/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        { from: "frontend/templates/frontend/favicons", to: "favicons" },
        { from: "frontend/src/components/assets", to: "assets" },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    require('autoprefixer'),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8888,
    }),
  ],
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
    },
  },
};
