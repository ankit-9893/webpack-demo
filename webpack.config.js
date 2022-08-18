const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(svg|jpg|JPG)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }
}