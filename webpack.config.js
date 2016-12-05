const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: __dirname + '/src/app',
  entry: './entrance.js',
  output: {
    path: __dirname + '/src/dist',
    filename: 'bundle.js'
  },
  devServer: {
    colors: true,
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};