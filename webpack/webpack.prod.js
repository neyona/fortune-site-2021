// webpack/webpack.prod.js
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
        API_URL_FSS: '******************',
        TEST_KEY: '******************',
        SECOND_KEY: '******************',
        API_URL_CFSS: '******************',
        SAMESITEAPI: '******************',
    }),
  ],
}
