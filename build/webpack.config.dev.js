//webpack的开发环境配置

const path = require('path') //path绝对路径，‘path’是webpack的一个包
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loader依赖的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')//打包出的html入口
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//打包分离出css

const config = {
    mode:'development', //开发mode为development，webpack会加载默认的开发环境配置，详见官方文档
    target:'web',//目标为web平台
    entry:path.join(__dirname, '../main.js'), //所有打包的入口
    //打包文件的出口，打包的文件放在哪里
    output:{
        filename:'bundle.[hash:8].js', //使用hash来标识每一次打包
        path:path.join(__dirname, '../dist')
    },
    devtool:'#cheap-module-eval-source-map', //使用sourceMap，详情见官方文档
    //开发环境的devServer，可以让项目运行在本地上
    devServer:{
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true, //是否将webpack错误也打印到控制台
        },
        open:true, //是否自动打开浏览器
        hot:true, //异步加载
    },
    //模块导入规则，原生的webpack只支持原生的js，不是原生的js文件都需要不同的加载插件来加载
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, //css分离插件
                    'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader:'postcss-loader', //css后处理插件，详细用法见官方文档
                        options:{
                            sourceMap:true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10000,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    //插件
    plugins:[
        new webpack.DefinePlugin({
            'process.env':JSON.stringify('development')
        }),//设置开发模式变量
        new VueLoaderPlugin(),
        //网页插件
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html', //渲染的网页的入口
            inject:true
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        }
        ),
        new webpack.HotModuleReplacementPlugin(),//异步加载插件
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
module.exports = config //输出config