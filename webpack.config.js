const path = require('path');
const output = path.join(__dirname, './docs');

module.exports = {
    entry: './src/App.js',
    output: {
        path: output,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: output
    }
};