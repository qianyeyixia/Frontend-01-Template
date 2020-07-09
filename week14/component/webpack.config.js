const path = require('path')

module.exports = {
    entry: './main.js',
    mode: 'development',
    devServer:{
        port: 8000,    
        compress: true, 
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'create' }]]
                    }
                }
            }
        ]
    }
}