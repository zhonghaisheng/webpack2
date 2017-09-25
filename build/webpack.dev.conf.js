//加载配置文件
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('../webpack.config');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
  	
  },
  plugins: [

  ]
})
