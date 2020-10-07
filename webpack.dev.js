const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        libraryExport: "default",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                // 注意:use 的别名 是 loaders。下面3个加载的执行顺序是 3 2 1
                use: [
                    // 1.不用传递参数可以简写
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // 2.给css-loader传递参数
                        options: {
                            url: true,
                            import: true
                        }
                    },
                    // 3.使用sass加载器
                    'sass-loader'
                ]
            },
            {
                //问题：默认处理不了html中img图片
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                //使用url-loader
                //下载url-loader和file-loader
                loader: 'url-loader',
                options: {
                    //图片大小小于8kb，则会被base64处理
                    limit: 8 * 1024,
                    //问题：因为url-loader默认使用es6模块化进行解析，
                    //而html-loader引入图片是commonjs
                    //解析时出现问题：[object Module]
                    //解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    //给图片进行重命名
                    //[hash:10]取原来图片的hash前10位
                    //[ext]取文件原来扩展名
                    name: '[hash:10].[ext]',
                    outputPath: 'images'
                }
            },
            {
                test: /\.html$/,
                //处理html文件中的img图片(负责引入img，从而能被url-loader进行处理)
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bulit.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true
    }
}