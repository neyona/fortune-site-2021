// webpack/webpack.prod.js
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('testingprod'),
    }),
    new webpack.EnvironmentPlugin({
        API_URL_FSS: '/oct-api/v1/',
        TEST_KEY: '3KcOW5Zp.NpQaIlmlFGgYtgd5keAgY5Cir5iJW2kp',
        SECOND_KEY: '0qF3jiMs.bIze89v6aC3YOC76hPNibWiyqDz2oApU',
        API_URL_CFSS:' /bard-api/v1/',
        SAMESITEAPI: 'Rn5GJmUu.voh8XGZMe3OdvYZ2q51hhPKCikBuYpnp',
    }),
  ],
}
