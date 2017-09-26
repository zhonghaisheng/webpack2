const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      vendor: ['vue','jquery']
  },
  output: {
    path: path.join(__dirname, './vendor'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './vendor', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
};