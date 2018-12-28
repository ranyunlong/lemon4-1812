const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ // 配置规则
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(jp|jpe|pn)g$/,
                use: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development', // 'production'
    resolve: {
        extensions: ['.vue', '.js', '.jsx'], // 自动解析扩展名(懒人配置)
        alias: { // 懒人配置（少些路径）
            'vue': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    devServer: { // 开发服务器
        proxy: {}, // 跨域代理
        contentBase: path.resolve('dist'), // html文件在哪里加载 绝对路径
        port: 8081,
        compress: true,
        open: true
    }
}

