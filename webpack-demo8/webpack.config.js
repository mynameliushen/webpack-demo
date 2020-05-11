const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(styl|stylus)$/,
        use:[
          'style-loader',
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: []
    }),
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash:8].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vue: {
          test: /(vue)/,
          priority: -1
        }
      }
    }
  },
  mode: 'production'
}
