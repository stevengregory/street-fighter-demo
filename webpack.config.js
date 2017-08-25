const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app/entrance.js', './src/sass/style.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    open: true,
    openPage: ''
  },
  module: {
    rules: [{
      test: /.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2017']
        }
      }
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    }]
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/sounds',
        to: 'sounds'
      }
    ])
  ]
};