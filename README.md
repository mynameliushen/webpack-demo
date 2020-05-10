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
## webpack-demo3 (学会解析React JSX文件)
安装 npm i react react-dom @babel/preset-react -D

## webpack-demo4 (学会解析css，less，stylus)
解析css需要安装 npm i style-loader css-loader -D
解析less需要安装 npm i less less-loader -D
解析stylus需要安装 npm i stylus stylus-loader -D
然后在webpack.config.js里添加相应的rules

## webpack-demo5 (学会分离css单独成一个文件)
分离css 需要MiniCSSExtractPlugin 插件
安装 npm i mini-css-extract-plugin -D

## webpack-demo6 (学会压缩html,css以及js)
webpack内部函数里有自带压缩js  是 uglifyjs-webpack-plugin
压缩html  需要安装npm i html-webpack-plugin
压缩css  使用 optimize-css-assets-webpack-plugin 同时使用 cssnano
安装 npm i optimize-css-assets-webpack-plugin -D
npm i cssnano -D

## webpack-demo7 (自动补齐css3前缀以及 css px 自动转换成rem)
补齐前缀 使用autoprefixer postcss-loader
安装 npm i postcss-loader autoprefixer -D
在 test: /\.css$/,  or .less .styl 中使用
{
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('autoprefixer')({
        browsers: ['last 2 version' ,'>1%', 'ios 7']
      })
    ]
  }
}
css px 自动转换成rem
使用px2rem-loader lib-flexible
安装 
npm i px2rem-loader -D
npm i lib-flexible -S

资源内联的意义
代码层面
 页面框架的初始化脚本
 上报相关打点
 css 内联避免页面闪动
请求层面
 减少http网络请求数

安装raw-loader
npm i raw-loader@0.5.1 -D
raw-loader 内联html
<script>
  ${require('raw-loader!./meta.html')}
</script>
raw-loader 内联js 如果使用了html-webpack-plugin 则 ${} 换成 <%= 'code' %>
<script>
  ${require('raw-loader!babel-loader!../node_modules/lib-flexible')}
</script>


css内联 有两种做法
1) 借助 style-loader
如:
```javascript
rules: [
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          insertAt: 'top', // 样式插入到<head>里
          singleton: true, // 将所有的style标签合成一个
        }
      },
      'css-loader,
    ]
  }
]
```
2) html-inline-css-webpack-plugin （用的更加广泛）