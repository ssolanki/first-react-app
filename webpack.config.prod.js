const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }]
  },
  devtool: 'source-map',
  performance: {
    hints: 'error'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: './index.html'
    }),
    new ExtractTextPlugin('style.[chunkhash:6].css'),
    new DashboardPlugin(),
    new OfflinePlugin({
      AppCache: {
        events: true,
        publicPath: '/appcache',
        FALLBACK: {
          '/': '/'
        },
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      'name': 'vendor'
    }),
    new CopyWebpackPlugin([{
      from: resolve(__dirname, './src/icons/'),
      to: resolve(__dirname, './dist/')
    }, {
      from: resolve(__dirname, './src/images/'),
      to: resolve(__dirname, './dist/images')
    }
  ])
  ]
}
