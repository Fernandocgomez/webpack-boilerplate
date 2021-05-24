const path = require('path');
// Plugins
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    mode: "production",
    entry: {
        main: ['./src/index.ts', './src/styles/styles.scss']
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '/', name: '[name].css'}
                    },
                    'sass-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['./*.html'],
            server: { baseDir: ['./'] }
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};