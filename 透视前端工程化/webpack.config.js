const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8089,
        hot: true,
        open: true,
        compress: true,
        overlay: true
    },
    devtool: "eval-source-map",
    mode: 'development',
    // proxy: {

    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('postcss-preset-env')()]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 8K
                            name: 'img/[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|acc)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'media/[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'font/[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpack({
            template: './public/index.html',
            title: '项目模板'
        })
    ]
}