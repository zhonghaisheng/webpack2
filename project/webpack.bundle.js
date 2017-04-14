var path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        //可配置多个入口js
        index: path.resolve(__dirname, './src/js/index.js'),
        list: path.resolve(__dirname, './src/js/list.js'),
        test: path.resolve(__dirname, './src/js/test.js')
    },
    module:{
    	loaders:[
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            }
            //.css 文件使用 style-loader 和 css-loader 来处理
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
    		,{
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            ,{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    publicPath: "../" //这里配置下可以处理css中背景图片路径出错问题
                })
            }
    	]
    },
    plugins:[
    	new HtmlWebpackPlugin({
            //webpack 处理html中img的src引入的图片
            template: 'html-withimg-loader!' + path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            chunks: ['index', 'common'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来）
            hash: true,
            minify: false,
            favicon:path.resolve(__dirname, './src/images/favico.ico')
        }),
        //支持多个html模板文件访问
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.resolve(__dirname, './list.html'),
            filename: 'list.html',
            chunks: ['list', 'common'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来）,
            minify: false,
            favicon:path.resolve(__dirname, './src/images/favico.ico')
        }),
        //支持多个html模板文件访问
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.resolve(__dirname, './test.html'),
            filename: 'test.html',
            chunks: ['test'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来，没有被选中抽取公用部分，可以不写）
            minify: false,
            favicon:path.resolve(__dirname, './src/images/favico.ico')
        }),
        // 提供公共代码
        new CommonsChunkPlugin({
            name: "common",
            filename: "js/common.bundle.js", //忽略则以name为输出文件的名字，否则以此为输出文件名字
            chunks: ['index', 'list'] //有选择从模块中提取公用部分
        }),
        //抽取css代码
        new ExtractTextPlugin({
            filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
            disable: false,
            allChunks: true
        })
    ]
}