const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].css"
    })
  ]
}