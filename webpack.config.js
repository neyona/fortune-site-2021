// fortune_docker/webpack.prod.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/src/index.js',
  mode: 'production',
  output: {
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
    historyApiFallback: true, // Necessary for react-router-dom to work
  },

  plugins: [
    new CleanWebpackPlugin(),  // removes outdated assets from the output directory
    new WebpackManifestPlugin(),
    new webpack.EnvironmentPlugin({
        API_URL_FSS: '/***********/',
        API_URL_CFSS:' /********/',
        API_KEY: '************************',
    }),
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    require('autoprefixer'),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
