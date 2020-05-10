# webpack-demo
全程自己动手学习webpack

# webpack-demo1
##初始化项目
1) `npm init  // 这是安装package.json`
2) `npm i webpack -D //等同于 npm install webpack --save-dev  这是安装webpack`
##下面开始使用webpack
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

