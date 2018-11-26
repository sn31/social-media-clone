const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
      resolve(__dirname, "src","index.jsx")],

  output: {
    filename: "app.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: '/'
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: '#source-map',
  devServer: {
      hot: true,
      contentBase: resolve(__dirname,'build'),
      publicPath: '/' //This should always match the publicPath option in output.
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["es2015",{"modules": false}], "react",]
          ,plugins: ["react-hot-loader/babel", 'styled-jsx/babel']
        }
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]'
        },
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //enables HMR globally
    new webpack.NamedModulesPlugin(), //prints HMR status updates to the console
    new HtmlWebpackPlugin({
        template:'template.ejs',
        appMountId: 'react-app-root', //HTML's root DOM node
        title: 'Social Media Clone',
        filename: resolve(__dirname, "build", "index.html"),
      }),
  ]
};
