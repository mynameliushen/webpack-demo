# webpack-demo
全程自己动手学习webpack

# webpack-demo1 （学会打包js）
## 初始化项目
1) `npm init  // 这是安装package.json`
2) `npm i webpack -D //等同于 npm install webpack --save-dev  这是安装webpack`
## 下面开始使用webpack
1) 编写一个index.js,内容如下:
```javascript
  document.write('hello webpack')
```
2) 编写一个webpack.config.js 内容如下:
```javascript
const path = require('path')
module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  }
}
```
3) `在命令行执行 webpack`


# webpack-demo2 （学会解析ES6,需要安装babel-loader）
安装 npm i @babel/core @babel/preset-env babel-loader -D
根目录需要 .babelrc 文件  内容如下
```javascript
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
还需要修改webpack.config.js
添加一个rules
```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: 'babel-loader'
    }
  ]
}
```