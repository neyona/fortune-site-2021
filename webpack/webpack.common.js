// webpack/webpack.common.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: path.resolve(__dirname, '..', './frontend/src/index.js'),
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use:
          [
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
  output: {
    path: path.resolve(__dirname, '..', 'frontend/static'),
    publicPath: '/', // IF THIS IS REMOVED, THE SITE IS NOT SERVED, AND MIME TYPE ISSUES COME UP
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),  // removes outdated assets from the output directory
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './frontend/templates/frontend/index.html'),
      filename: './index.html', // output file
      favicon: path.resolve(__dirname, '..', './frontend/templates/frontend/favicons/favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'frontend/templates/frontend/favicons'), to: 'favicons' },
        { from: path.resolve(__dirname, '..', 'frontend/src/components/assets'), to: 'assets' },
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
    require('autoprefixer'), // The autroprefixer allows bootstrap to be imported
    // at the top of main.scss
  ],
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
