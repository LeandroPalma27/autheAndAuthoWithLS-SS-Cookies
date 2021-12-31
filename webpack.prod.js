const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin")
const path = require('path');

let otherHtmlPageNames = ['main', 'register'];
let multipleHtmlPlugins = otherHtmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `resources/${name}.html`,
        template: `./src/resources/${name}.html`,
        chunks: [`${name}`],
        scriptLoading: 'blocking',
    })
});

let entryJsPropertieFiles = otherHtmlPageNames.map(name => {
    return JSON.parse(`{ "${name}": "./src/js/${name}.js", "${name}": "./src/js/${name}.js" }`);
});

let entries = {};

for (file of entryJsPropertieFiles) {
    entries = Object.assign(entries, file);
}

module.exports = {

    mode: 'production',

    entry: {
        index: ['./src/js/index.js',],
        ...entries
    },
    output: {
        filename: 'js/[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: [/styles.css$/, /main.css$/, /register.css$/],
                use: ["style-loader", "css-loader"],
            },
            {
                test: [/main.css$/, /register.css$/],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/img',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        /* allowedHosts: [ // Sirve para poder habilitar dominios que podran ser consumidos en el servidor.
            'host.com',
            'host2.com',
        ], */
        client: {
            logging: 'info',
        },
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            excludeChunks: [...otherHtmlPageNames],
            scriptLoading: 'blocking',
        }),
        new HtmlWebpackPlugin({ // Permite poder crear un archivo html dinamico en funcion a las importaciones requeridas.
            filename: 'styles.css',
            template: './src/styles.css',
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash].css', // Se le puede incluir un hash
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets/" }, // Mueve todo lo que esta en assets a la dist.
            ],
        }),
    ].concat(multipleHtmlPlugins),

};