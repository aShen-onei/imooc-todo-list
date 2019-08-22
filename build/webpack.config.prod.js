//webpack生产环境的webpack配置

const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const config = {
    //mode为production，即生产环境，webpack会加载生产环境的默认配置
    mode:'production',
    target:'web',
    entry:path.join(__dirname, '../main.js'),
    output:{
        filename:'[name].[chunkhash:8].js', //使用chunkhash来标识打包文件，使用hash会和vendor冲突
        path:path.join(__dirname, 'www')
    },
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
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader:'postcss-loader',
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
    //类库文件分离，将使用的包分离打包出来让浏览器进行长缓存，详情见官方文档
    optimization:{
        splitChunks:{
            chunks:'all',
            automaticNameDelimiter:'-',
            cacheGroups:{
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    priority:1
                }
            }
        }
    },
    // 插件
    plugins:[
        new webpack.DefinePlugin({
            'process.env':JSON.stringify('production')
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
            inject:true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css', //使用hash标识
            chunkFilename:'[id].[hash].css'
        }
        ),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        
    ]
}
module.exports = config