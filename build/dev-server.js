var webpackConfig = require('./webpack.dev.conf.js');
var webpack = require('webpack');
var express = require('express');
var compiler = webpack(webpackConfig);

var app = express();
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

// 本地json-server服务器搭建代码
// 引入数据库文件
var appData = require('../test/static/test.json')
// 引入数据库
var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求
apiRoutes.post('/evaluate', function (req, res) {
  res.json(appData);
})
// 调用api
app.use('/api', apiRoutes)
