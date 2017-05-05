let webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }      
    }, {
      test: /\.less$/,
      use: [
        {loader: 'style-loader'}, 
        {loader: 'css-loader'}, 
        {loader: 'less-loader'}
      ]
    }, {
      test: /\.tpl$/,
      use: {
        loader: 'raw-loader'
      }
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '_app.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
