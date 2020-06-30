var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var LoadablePlugin = require('@loadable/webpack-plugin')
var  MiniCssExtractPlugin = require ('mini-css-extract-plugin')
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ModuleFederationPlugin = require("webpack").container
    .ModuleFederationPlugin;

var serverConfig = {
    entry: path.resolve(__dirname, 'server.js'),
    target: 'node',
    //target: "async-node",
    //externals: [{...nodeExternals(),}],
    output: {
        path: path.resolve(__dirname, 'public/server'),
        filename: 'server.js',
        //libraryTarget: "commonjs2",
        publicPath: '/'

    },
    externals: ["enhanced-resolve"],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: false,
    },
    mode: 'development',
    module: {
        rules: [
            /*{
                test: /\.(sa|sc|c)ss$/,
                use: [

                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader',
                ],

                include: /HASH\.(css|scss)$/,
            },

            {
                test: /\.(sa|sc|c)ss$/,

                use:
                    [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    //Fake css modules. using no hash.
                                    //This is only for importing css as object
                                    getLocalIdent: (context, localIdentName, localName, options) => {
                                        return localName
                                    }
                                    //localIdentName: '[local]--[hash:base64:5]'
                                }
                            }
                        },
                        'sass-loader',
                    ]
                ,

                exclude: /HASH\.(css|scss)$/,
            },


            {test: /\.svg$/, use: 'svg-inline-loader'},
            {test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/, use: 'url-loader'},*/
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|GeneralJS|Global)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@loadable/babel-plugin",  ["@babel/plugin-proposal-decorators", { "legacy": true }], "@babel/plugin-proposal-class-properties"]
                    }
                }
            },
        ]
    },
    plugins: [

        new ModuleFederationPlugin({
            name: "website2",
            library: { type: "commonjs-module" },
            filename: "container.js",

            exposes: {
                "./SomeComponent": "./remoteServer/SomeComponent",
            },
            //shared: ["react", "react-dom"],
        }),
    ]
}

module.exports = [serverConfig]
