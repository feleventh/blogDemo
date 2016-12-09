var webpack = require('webpack')

module.exports = {
    entry: './main.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Zhang Chi')
    ]
}