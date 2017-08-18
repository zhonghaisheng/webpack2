var webpack = require("webpack"),
    path = require('path'),
    jquery = require('jquery'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    bundleWebpack = require(path.resolve(__dirname,'./project/webpack.bundle'));
module.exports = merge(bundleWebpack, {
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader', query: { limit: 1024, name: 'images/[name].[ext]?[hash:7]' } },
            {test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader?name=fonts/[name].[ext]?[hash:7]'
            }
            // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            // }, {
            //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            // }, {
            //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'file-loader'
            // }, {
            //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            // }
        ]
    },
    //实时更新配置
    devServer: {
        //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
        historyApiFallback: true,
        //热启动（根据文件变化进行编译）
        hot: true,
        //启动服务器
        open: true,
        //设为true时可以在文件发生变化时，更新页面
        inline: true,
        //设置页面访问端口号
        port: 8099
    },
    plugins: [
        //不需要打包html将此处注释便可
        new webpack.HotModuleReplacementPlugin(),
        //webpack定义全局变量
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //webpack压缩js代码（开发环境下不推荐开启，会消耗性能）
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
})
