const { merge } = require('webpack-merge');
const common = require('./webpack.config.js')
const path = require("path");

const config = merge([common, {
    mode: 'development',
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "src"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path]__[name]__[local]",
                            },
                        }
                    }
                ]
            },
        ],
    },
}])
console.log(JSON.stringify(config));

module.exports = config;
