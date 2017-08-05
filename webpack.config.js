module.exports = {
  context: __dirname + '/src/app',
  entry: './entrance.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
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
          presets: ['es2015']
        }
      }
    }]
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  }
};