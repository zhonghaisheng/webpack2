//启动express服务器入口文件
var webpackConfig = require('./webpack.dev.conf.js');
var webpack = require('webpack');
var express = require('express');
var compiler = webpack(webpackConfig);

var app = express();//express充当临时服务器，用于生成文件以及访问
var opn = require('opn');

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler);
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

//使用热重载插件，进行热更新，生成文件（devMiddleware+hotMiddleware）
app.use(devMiddleware);
app.use(hotMiddleware);

module.exports = app.listen(webpackConfig.devServer.port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + webpackConfig.devServer.port
  console.log('Listening at ' + uri + '\n')
  opn(uri);
})

// 本地json-server服务器搭建代码（前端开发环境用，实际部署到服务器下面则直接请求后台数据接口，此处可删）
// 引入数据库文件
var appData = require('../project/static/test.json')
// 引入数据库
var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求
apiRoutes.post('/test', function (req, res) {
  res.json(appData);
})
// 调用api
app.use('/api', apiRoutes)