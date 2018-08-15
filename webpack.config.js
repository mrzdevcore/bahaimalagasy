const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
    entry: {
        main: './app/scripts/main.js'
    },
    devtool: 'source-map',
    mode : devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true} },
                    { loader: 'sass-loader', options: { sourceMap: true} }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ],
    },
    output: {
        publicPath: 'public/',
        path: path.join(__dirname, 'public/bundle'),
        filename: '[name].min.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ]
}

module.exports = config;