const path = require('path')

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
        use: ['style-loader','css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader','css-loader','stylus-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  }
}