var path = require('path');
var webpack = require('webpack');
var packageData = require('./package.json');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    packageData.main
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //  Uncomment to get a minified js output, will make redux run slower,
    //  so best to create another webpack.config.prod.js
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
        test: /\.less$/,
        exclude: /(node_modules)/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.join(__dirname, 'src/css')
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

// debug: true,
// watch: true,
// watchDelay: 300,
// , {
//   loaders: [{
//     test: /\.less$/,
//     exclude: /(node_modules)/,
//     loaders: ['style-loader', 'css-loader', 'less-loader'],
//     include: path.join(__dirname, 'src/css')
//   }]
// }
