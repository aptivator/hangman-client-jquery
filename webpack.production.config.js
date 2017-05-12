module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['es2015']
        }
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
};
