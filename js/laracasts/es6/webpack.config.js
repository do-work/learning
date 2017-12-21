var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/main.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'buble-loader'}
        ]
    }

};